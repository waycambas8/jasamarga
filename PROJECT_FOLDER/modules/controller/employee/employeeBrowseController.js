const { async } = require("rxjs");
const { Employee, Education, Family, Profile, Sequelize } = require("../../../models");
const { Op } = require("sequelize");

class EmployeeBrowseController {
    async all (_request, _response) {
        const query = {};
        try {
            query.where = {}
            if (_request.query.id) {
                query.where.id = { 
                    [Op.in]: _request.query.id.split(',').map(id => parseInt(id)) 
                };
            }

            if (_request.query.name) {
                query.where.name = { 
                    [Op.iLike]: `%${_request.query.name}%`
                };
            }

            if (_request.query.is_active) {
                query.where.is_active = _request.query.is_active
            }

            query.order = [['created_at', 'DESC']];
            if (_request.query.orderBy) {
                query.order = [[_request.query.orderBy, _request.query.orderType]];
            }

            if (_request.query.page < 1) {
                _request.query.page = 1
            }

            query.limit = _request.query.limit ? _request.query.limit : 10;
            query.offset = _request.query.page ? (_request.query.page - 1) * query.limit : 0;

            // Collection Join
            query.include = [
                {
                    model: Education,
                    as: 'education',
                    required: false
                },
                {
                    model: Family,
                    as: 'families',
                    required: false
                },
                {
                    model: Profile,
                    as: 'profile',
                    required: false
                },
            ];

            const datas = await Employee.findAll(query);
            return _response.json({
                data: datas
            }); 
        } catch (error) {
            console.error(error);
            return _response.status(500).json({ error: error });
        }
    };

    async detail (_request, _response) {
        const query = {};
        try {
            query.where = {}
            if (_request.params.id) {
                query.where.id = _request.params.id;
            }

            // Collection Join
            query.include = [
                {
                    model: Education,
                    as: 'education',
                    required: false
                },
                {
                    model: Family,
                    as: 'families',
                    required: false
                },
                {
                    model: Profile,
                    as: 'profile',
                    required: false
                },
            ];

            const datas = await Employee.findOne(query);
            return _response.json({
                data: datas
            }); 
        } catch (error) {
            console.error(error);
            return _response.status(500).json({ error: error });
        }
    };

    async report (_request, _response) {
        const query = {};
        try {
            // Collection Join
            query.include = [
                {
                    model: Profile,
                    as: 'profile',
                    attributes: ['place_of_birth', 'date_of_birth', 'gender']
                },
                {
                    model: Education,
                    as: 'education',
                    attributes: ['name', 'level']
                },
                {
                    model: Family,
                    as: 'families',
                    attributes: ['relation_status']
                }
            ];
            const datas = await Employee.findAll(query);
          
            const result = datas.map(employee => {
                const profile = employee.profile;
                const education = employee.education;
                const families = employee.families || []; // Ensure families is always an array
          
                const age = profile ? new Date().getFullYear() - new Date(profile.date_of_birth).getFullYear() : null;
                const gender = profile ? profile.gender : null;
          
                const school_name = education ? education.name : null;
                const level = education ? education.level : null;
          
                const istriCount = families.filter(f => f.relation_status === 'Istri').length;
                const anakCount = families.filter(f => f.relation_status === 'Anak').length;
          
                let familyData = null;
                if (istriCount > 0 && anakCount > 0) {
                  familyData = `${istriCount} Istri & ${anakCount} Anak`;
                } else if (istriCount > 0) {
                  familyData = `${istriCount} Istri`;
                } else if (anakCount > 0) {
                  familyData = `${anakCount} Anak`;
                }
          
                return {
                  employee_id: employee.id,
                  nik: employee.nik,
                  name: employee.name,
                  is_active: employee.is_active,
                  gender: gender,
                  age: age ? `${age} Years Old` : null,
                  school_name: school_name,
                  level: level,
                  family_data: familyData
                };
            });

            return _response.json({
                data: result
            }); 
        } catch (error) {
            console.error(error);
            return _response.status(500).json({ error: error });
        }
    }
}

module.exports = EmployeeBrowseController;

const { async } = require("rxjs");
const { Employee, Education, Family, Profile } = require("../../../models");
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

    async detail (req, res) {
        res.json('hallo detail');
    };
}

module.exports = EmployeeBrowseController;

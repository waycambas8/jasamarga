const { async } = require("rxjs");
const { Op } = require("sequelize");
const { Education, Employee } = require("../../../models");

class EducationBrowseController {
    async all (_request, _response) {
        const query = {};
        try {
            query.where = {}
            if (_request.query.id) {
                query.where.id = { 
                    [Op.in]: _request.query.id.split(',').map(id => parseInt(id)) 
                };
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
                    model: Employee,
                    as: 'employee',
                    required: false
                }
            ];

            const datas = await Education.findAll(query);
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
                    model: Employee,
                    as: 'employee',
                    required: false
                }
            ];

            const datas = await Education.findOne(query);
            return _response.json({
                data: datas
            }); 
        } catch (error) {
            console.error(error);
            return _response.status(500).json({ error: error });
        }
    };
}

module.exports = EducationBrowseController;

const { async } = require("rxjs");
const { Op } = require("sequelize");
const {Family} = require("../../../models");

class FamilyBrowseController {
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

            const datas = await Family.findAll(query);
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

module.exports = FamilyBrowseController;

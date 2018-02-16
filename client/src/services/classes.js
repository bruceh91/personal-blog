import * as baseService from './base';

function all() {
    return baseService.get('/api/classess');
}

function one(id) {
    return baseService.get(`/api/classess/${id}`);
}

function insert(data) {
    return baseService.post('/api/classess', data);
}

function update(id, data) {
    return baseService.put(`/api/classess/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/classess/${id}`);
}

export { all, one, insert, update, destroy };
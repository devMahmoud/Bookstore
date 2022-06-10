import http from '../http-common';

const appId = 'PR3nHnoYqE6G17x4mZNN';

const getAll = () => http.get(`/apps/${appId}/books`);

const create = (data) => http.post(`/apps/${appId}/books`, data);

const remove = (id) => http.delete(`/apps/${appId}/books/${id}`);

const Bookservice = {
  getAll,
  create,
  remove,
};
export default Bookservice;

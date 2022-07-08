import axios from "axios";

const PARENT_BASE_API_URL = "http://localhost:8080/school/parentall";

class ParentService {
  getAllParents() {
    return axios.get(PARENT_BASE_API_URL);
  }

  getParentById(id) {
    return axios.get(PARENT_BASE_API_URL + "/" + id);
  }

  addParent(parent) {
    return axios.post(PARENT_BASE_API_URL, parent);
  }

  editParent(parent, id) {
    return axios.put(PARENT_BASE_API_URL + "/" + id, parent);
  }

  deleteParent(id) {
    return axios.delete(PARENT_BASE_API_URL + "/" + id);
  }
}

export default new ParentService();

import axios from "axios";

const TEACHER_BASE_API_URL = "http://localhost:8080/school/teacherall";

class TeacherService {
  getAllteachers() {
    return axios.get(TEACHER_BASE_API_URL);
  }

  getTeacherById(id) {
    return axios.get(TEACHER_BASE_API_URL + "/" + id);
  }

  addTeacher(teacher) {
    return axios.post(TEACHER_BASE_API_URL, teacher);
  }

  editTeacher(teacher, id) {
    return axios.put(TEACHER_BASE_API_URL + "/" + id, teacher);
  }

  deleteTeacher(id) {
    return axios.delete(TEACHER_BASE_API_URL + "/" + id);
  }
}

export default new TeacherService();

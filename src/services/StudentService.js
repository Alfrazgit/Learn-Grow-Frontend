import axios from "axios";

const SCHOOL_API_BASE_URL = "http://localhost:8080/school/studentall";

class StudentService {
  getStudents() {
    return axios.get(SCHOOL_API_BASE_URL);
  }

  getStudentById(id) {
    return axios.get(SCHOOL_API_BASE_URL + "/" + id);
  }

  addStudent(student) {
    return axios.post(SCHOOL_API_BASE_URL, student);
  }

  editStudent(student, id) {
    return axios.put(SCHOOL_API_BASE_URL + "/" + id, student);
  }

  deleteStudent(id) {
    return axios.delete(SCHOOL_API_BASE_URL + "/" + id);
  }
}

export default new StudentService();

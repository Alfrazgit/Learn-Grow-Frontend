import axios from "axios";

const SCHOOL_API_BASE_URL = "http://localhost:8080/school/studentall";

class StudentService {
  getStudents() {
    return axios.get(SCHOOL_API_BASE_URL);
  }

  addStudent(student) {
    return axios.post(SCHOOL_API_BASE_URL, student);
  }
}

export default new StudentService();

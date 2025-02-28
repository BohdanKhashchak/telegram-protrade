import axios from "axios";

const BASE_URL = "https://miniappback.onrender.com/api";

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const getLessons = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/lessons`);
    return response.data;
  } catch (error) {
    console.error("Error fetching lessons:", error);
  }
};

export const getExercises = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/exercises`);
    return response.data;
  } catch (error) {
    console.error("Error fetching exercises:", error);
  }
};

export const getCourses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/courses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching category by id:", error);
  }
};

export const getLessonById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/lessons/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching lesson by id:", error);
  }
};

export const getExerciseById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/exercises/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching exercise by id:", error);
  }
};

export const getCourseById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course by id:", error);
  }
};

export const authTelegram = async (user_id, click_id) => {
  try {
    const response = await axios.post(`${BASE_URL}/webhook/telegram-user`, {
      params: {
        user_id: user_id,
        click_id: click_id,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching course by id:", error);
  }
};

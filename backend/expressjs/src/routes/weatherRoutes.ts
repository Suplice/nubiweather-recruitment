import express from "express";
import weatherController from "../controllers/weatherController";

const router = express.Router();

router.get("/realtime-weather", weatherController.getCurrentWeather);
router.get("/forecast-weather", weatherController.getForecastWeather);

export default router;

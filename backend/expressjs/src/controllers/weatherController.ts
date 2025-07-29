import { Request, Response } from "express";
import {
  FetchCurrentWeatherResponse,
  FetchForecastWeatherResponse,
} from "../types/weather";
import weatherService from "../services/weatherService";

export const getCurrentWeather = async (
  req: Request<{}, {}, {}, { q: string }>,
  res: Response<FetchCurrentWeatherResponse>
) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Missing query parameter: q" });
  }

  try {
    const data = await weatherService.getCurrentWeather(q);
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export const getForecastWeather = async (
  req: Request<{}, {}, {}, { q: string; days: string }>,
  res: Response<FetchForecastWeatherResponse>
) => {
  const { q, days } = req.query;

  if (!q || !days) {
    return res
      .status(400)
      .json({ error: "Missing query parameters: q or days" });
  }

  try {
    const data = await weatherService.getForecastWeather(q, days);
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

export default {
  getForecastWeather,
  getCurrentWeather,
};

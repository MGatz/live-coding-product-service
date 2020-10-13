import { NextFunction } from "connect";
import { Response } from "express";
import { Operation } from "express-openapi";
import { Request } from "express-serve-static-core";
import { ProductService } from "../../services/ProductService";
import { WeatherCondition } from "../../models/WeatherCondition";

const productService: ProductService = ProductService.of();

export const GET: Operation = (req: Request, res: Response, next: NextFunction) => {
  const { weatherCondition, temperature } = req.query;

  const weatherConditionEnumValue = getWeatherCondition(weatherCondition as string);

  const productList = productService.findProducts({ weatherCondition: weatherConditionEnumValue, temperature: parseInt(temperature as string, 10) });

  res.json(productList);
};

function getWeatherCondition(weatherCondition: string) {
  switch (weatherCondition) {
    case WeatherCondition.SUNNY:
      return WeatherCondition.SUNNY;
    case WeatherCondition.CLOUDY:
      return WeatherCondition.CLOUDY;
    case WeatherCondition.RAINY:
      return WeatherCondition.RAINY;
    case WeatherCondition.WINDY:
      return WeatherCondition.WINDY;
    case WeatherCondition.SNOWY:
      return WeatherCondition.SNOWY;

    default:
      break;
  }
}

GET.apiDoc = {
  description: 'Get filtered list of products',
  operationId: 'getByFilters',
  parameters: [{
    in: 'query',
    name: 'weatherCondition',
    required: true,
    type: 'string',
    enum: [WeatherCondition.SUNNY, WeatherCondition.CLOUDY, WeatherCondition.RAINY, WeatherCondition.WINDY, WeatherCondition.SNOWY],
  }, {
    in: 'query',
    name: 'temperature',
    required: true,
    type: 'number'
  }],
  responses: {
    200: {
      description: 'The filtered product list',

    }
  }
}

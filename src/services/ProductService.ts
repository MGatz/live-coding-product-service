import { WeatherCondition } from "../models/WeatherCondition";
import { Product } from "../models/Product";

export class ProductService {
  findProducts(filters: { weatherCondition: WeatherCondition, temperature: number }): Product[] {
    return this.demoData.filter(product => {
      return product.bestForWeatherConditions.includes(filters.weatherCondition)
        && product.lowestTemp <= filters.temperature
        && product.heighestTemp >= filters.temperature;
    });
  };

  public static of() {
    return new ProductService();
  }

  private readonly demoData: Product[] = [
    Product.of('Wintermantel', [WeatherCondition.SNOWY, WeatherCondition.SUNNY], -15, 5, '110 Euro'),
    Product.of('Regenjacke', [WeatherCondition.RAINY, WeatherCondition.CLOUDY], -5, 15, '89 Euro'),
    Product.of('Wintermantel extrem wasserdicht', [WeatherCondition.SNOWY, WeatherCondition.RAINY, WeatherCondition.SUNNY], -45, 5, '210 Euro'),
    Product.of('T-Shirt', [WeatherCondition.SUNNY, WeatherCondition.CLOUDY], 15, 40, '15 Euro'),
    Product.of('Pullover', [WeatherCondition.CLOUDY, WeatherCondition.WINDY], 5, 20, '55 Euro'),
    Product.of('Fellstiefel', [WeatherCondition.SUNNY, WeatherCondition.CLOUDY], -10, 10, '15 Euro'),
    Product.of('Sneaker', [WeatherCondition.SUNNY, WeatherCondition.CLOUDY], 5, 30, '15 Euro'),
    Product.of('Thermounterwäsche', [WeatherCondition.SNOWY, WeatherCondition.RAINY, WeatherCondition.WINDY], -45, 0, '38 Euro'),
    Product.of('Gummistiefel', [WeatherCondition.RAINY, WeatherCondition.WINDY], -5, 15, '18 Euro'),
  ];
}

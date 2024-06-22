
/**
 * Отрисовывает компонент c погодой
 *
 */

export type TWeather = {
  icon: string
  currentTemperature: number
  morningTemperature: number
  tonightTemperature: number
}

export const Weather = ({icon, currentTemperature, morningTemperature, tonightTemperature}: TWeather) => {
  return (
    <>
      <img src={icon} alt="Weather icon" className="weather-icon"/>
      <div className="weather-current-temperature">{currentTemperature}</div>
      <div className="weather-morning-temperature">Утром {morningTemperature}</div>
      <div className="weather-tonight-temperature">Вечером {tonightTemperature}</div>
    </>
  )
}

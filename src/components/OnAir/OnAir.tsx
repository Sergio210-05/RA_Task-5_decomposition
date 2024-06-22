
/**
 * Отрисовывает компонент c эфиром
 *
 */

export type TypeOnAir = {
  img: string
  title: string
  channel: string
}

export const OnAir = ({img, title, channel}: TypeOnAir) => {
  return (
    <>
      <img src={img} alt="on air icon" className="on-air-icon"/>
      <div className="on-air-title">{title}</div>
      <div className="on-air-channel">{channel}</div>
    </>
  )
}

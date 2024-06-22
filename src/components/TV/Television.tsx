
/**
 * Отрисовывает компонент c телепрограммой
 *
 */

export type TypeTV = {
  time: string
  title: string
  channel: string
}

export const Television = ({time, title, channel}: TypeTV) => {
  return (
    <>
      <div className="tv-programm-time">{time}</div>
      <div className="tv-programm-title">{title}</div>
      <div className="tv-programm-channel">{channel}</div>
    </>
  )
}


/**
 * Отрисовывает компонент c расписанием
 *
 */

export type TSchedule = {
  title: string
  href: string
}

export const Schedule = ({title, href}: TSchedule) => {
  return (
    <a href={href} className="schedule">{title}</a>
  )
}

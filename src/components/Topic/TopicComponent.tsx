
/**
 * Отрисовывает компонент раздела "Посещаемое"
 *
 */

export type TTopic = {
  title: string
  description: string
  href: string
}

export const TopicComponent = ({title, description, href}: TTopic) => {
  return (
    <>
      <a href={href}>{title}</a> - <div>{description}</div>
    </>
  )
}

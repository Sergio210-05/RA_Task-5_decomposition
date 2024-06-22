
/**
 * Отрисовывает компонент c датой
 *
 */

export const DateWidget = () => {
  return (
    <div className="date">{Date().toLocaleString()}</div>
  )
}

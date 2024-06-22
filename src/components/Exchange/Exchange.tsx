
/**
 * Отрисовывает компонент c биржевыми курсами
 *
 */

export type TExchange = {
  ticker: string
  value: number
  increment: number
}

export const Exchange = ({ticker, value, increment}: TExchange) => {
  return (
    <>
    <div className="exchange-container">
      <div className="exchange exchange-ticker">{ticker}  </div>
      <div className="exchange exchange-value">{value}  </div>
      <div className="exchange exchange-increment">{increment}  </div>
    </div>

      </>
  )
}

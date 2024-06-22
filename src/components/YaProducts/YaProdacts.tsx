
/**
 * Отрисовывает компонент cо ссылкой на сервис Яндекса
 *
 */

export type TProdacts = {
  title: string
  href: string
}

export const YaProdacts = ({title, href}: TProdacts) => {
  return (
    <>
      <a href={href} className="yandex-product-title">{title}</a>
      
    </>
  )
}

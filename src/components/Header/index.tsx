import parcelImg from '../../assets/parcel.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <p>Formulário <br /> para compra de <span>Pacote de Stickers</span></p>
      </div>

      <img src={parcelImg} alt="Imagem de uma caixa de papelão para envio de encomendas" />
    </header>
  )
}
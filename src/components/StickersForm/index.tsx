import styles from './StickersForm.module.css'

export function StickersForm() {
  return (
    <form action="">
      <div className={styles.stickersType}>
        <p>Quais stickers?</p>
        <div>
          <label htmlFor="">React</label>
          <input type="checkbox" name="" />
        </div>
        <div>
          <label htmlFor="">Vue</label>
          <input type="checkbox" name="" />
        </div>
        <div>
          <label htmlFor="">Angular</label>
          <input type="checkbox" name="" />
        </div>
      </div>

      <div className={styles.stickersAmount}>
        <p>Quantos stickers de cada?</p>
        <div className="amountControl">
          <button type="button"></button>
          <input type="number" name="" id="" />
          <button type="button"></button>
        </div>
      </div>

      <div className={styles.stickersInfo}>
        <p>Observações</p>
        <textarea name="" id="" cols={30} rows={10} placeholder="Insira algumas informações extras..." />
      </div>
      
      <div className={styles.sendForm}>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}
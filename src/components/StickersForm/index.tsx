import { useForm } from 'react-hook-form'
import styles from './StickersForm.module.css'

type Techs = 'react' | 'vue' | 'angular'

interface StickerData {
  techs: Techs[]
  stickersAmount: number
  stickersInfo: string
}

export function StickersForm() {
  const stickerForm = useForm({
    defaultValues: {
      techs: [],
      stickersAmount: 0,
      stickersInfo: ''
    }
  })

  const {handleSubmit, register, reset, setValue } = stickerForm

  function handleNewStickersOrder(data: StickerData) {
    const newStickerOrder: StickerData = {
      techs: data.techs,
      stickersAmount: data.stickersAmount,
      stickersInfo: data.stickersInfo
    }


    console.log(newStickerOrder);
    
    reset()
  }

  function checkAll() {
    setValue<any>('techs', ['react', 'vue', 'angular'])
    
  }

  return (
    <form onSubmit={handleSubmit(handleNewStickersOrder)}>
      <div className={styles.stickersType}>
        <p>Quais stickers?</p> 
        <div>
          <label htmlFor="checkAll">Marcar todos</label>
          <input type="checkbox" id="checkAll" onChange={checkAll} />
        </div>s
        <div>
          <label htmlFor="">React</label>
          <input type="checkbox"  value="react" {...register('techs')} />
        </div>
        <div>
          <label htmlFor="">Vue</label>
          <input type="checkbox"  value="vue" {...register('techs')} />
        </div>
        <div>
          <label htmlFor="">Angular</label>
          <input type="checkbox"  value="angular" {...register('techs')} />
        </div>
      </div>

      <div className={styles.stickersAmount}>
        <p>Quantos stickers de cada?</p>
        <div className="amountControl">
          <button type="button">-</button>
          <input type="number" id="" {...register('stickersAmount')} />
          <button type="button">+</button>
        </div>
      </div>

      <div className={styles.stickersInfo}>
        <p>Observações</p>
        <textarea id="" cols={30} rows={10} placeholder="Insira algumas informações extras..." {...register('stickersInfo')} />
      </div>
      
      <div className={styles.sendForm}>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}
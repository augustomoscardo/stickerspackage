import { useForm } from 'react-hook-form'
import { Plus, Minus } from "phosphor-react"
import styles from './StickersForm.module.css'
import { useRef } from 'react'

type Techs = 'react' | 'vue' | 'angular'

interface StickerData {
  techs: Techs[]
  stickersAmount: number
  stickersInfo: string
}

export function StickersForm() {
  const inputMarkAllRef = useRef<HTMLInputElement>(null)
  const inputIncrementRef = useRef<HTMLInputElement>(null)

  const stickerForm = useForm({
    defaultValues: {
      techs: [],
      stickersAmount: 0,
      stickersInfo: ''
    }
  })

  const {handleSubmit, register, reset, setValue } = stickerForm

  function handleIncrementAmount() {
    console.log(Number(inputIncrementRef.current.value) + 1);

    
    
    setValue('stickersAmount', Number(inputIncrementRef.current.value) + 1)
  }

  function handleDecrementAmount() {
    setValue('stickersAmount', Number(inputIncrementRef.current.value) - 1)
  }

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
    
    if (inputMarkAllRef.current.checked) {
      setValue<any>('techs', ['react', 'vue', 'angular'])
    } else {
      setValue<any>('techs', [])
    }
    
  }

  return (
    <form onSubmit={handleSubmit(handleNewStickersOrder)}>
      <div className={styles.stickersType}>
        <p>Quais stickers?</p> 
        <div>
          <input type="checkbox" id="checkAll" ref={inputMarkAllRef} onChange={checkAll} />
          <label htmlFor="checkAll" >Marcar todos</label>
        </div>
        <div>
          <input type="checkbox"  value="react" {...register('techs')} />
          <label htmlFor="">React</label>
        </div>
        <div>
          <input type="checkbox"  value="vue" {...register('techs')} />
          <label htmlFor="">Vue</label>
        </div>
        <div>
          <input type="checkbox"  value="angular" {...register('techs')} />
          <label htmlFor="">Angular</label>
        </div>
      </div>

      <div className={styles.stickersAmount}>
        <p>Quantos stickers de cada?</p>
        <div className={styles.amountControl}>
          <button type="button" onClick={handleDecrementAmount}>
            <Minus size={24} weight="bold" />
          </button>
          <input type="number"  {...register('stickersAmount', {min: 1, max: 100})} ref={inputIncrementRef} />
          <button type="button" onClick={handleIncrementAmount}>
            <Plus size={24} weight="bold" />
          </button>
        </div>
      </div>

      <div className={styles.stickersInfo}>
        <p>Observações:</p>
        <textarea id="" cols={30} rows={10} placeholder="Insira algumas informações extras..." {...register('stickersInfo')} />
      </div>
      
      <div className={styles.sendForm}>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}
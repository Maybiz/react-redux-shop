export const BUY_TV = 'buy tv'

export const buyTv = total => {
   return {
      type: BUY_TV,
      payload: total
   }
}
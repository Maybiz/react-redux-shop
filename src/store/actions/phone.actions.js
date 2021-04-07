export const BUY_PHONE = 'buy phone'

export const buyPhone = total => {
   return {
      type: BUY_PHONE,
      payload: total
   }
}
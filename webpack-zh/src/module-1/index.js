import { sample } from '../common'

export function logger(msgs) {
  console.log('module1')
  console.log('11111');
  const msg = sample(msgs)
  console.info(msg)
}

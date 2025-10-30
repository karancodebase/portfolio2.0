export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [key: string]: unknown }
  | ClassValue[]

export function clsx(...args: Array<ClassValue | ClassValue[]>): string {
  const inputs = args.length === 1 && Array.isArray(args[0]) ? args[0] : args
  const classes: string[] = []

  const handle = (item: ClassValue): void => {
    if (!item && item !== 0) return
    const t = typeof item
    if (t === 'string' || t === 'number') {
      classes.push(String(item))
      return
    }
    if (Array.isArray(item)) {
      item.forEach(handle)
      return
    }
    if (t === 'object') {
      const obj = item as { [key: string]: unknown }
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key]) {
          classes.push(key)
        }
      }
    }
  }

  ;(inputs as ClassValue[]).forEach(handle)
  return classes.join(' ')
}

export function cn(...inputs: ClassValue[]) {
  return clsx(...inputs)
}

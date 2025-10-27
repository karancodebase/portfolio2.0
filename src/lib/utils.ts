export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [key: string]: any }
  | ClassValue[]

export function clsx(...args: any[]): string {
  const inputs = args.length === 1 && Array.isArray(args[0]) ? args[0] : args
  const classes: string[] = []

  const handle = (item: any) => {
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
      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key) && item[key]) {
          classes.push(key)
        }
      }
    }
  }

  ;(inputs as any[]).forEach(handle)
  return classes.join(' ')
}

export function cn(...inputs: ClassValue[]) {
  return (clsx(inputs))
}

export const Response = () => (
  target: unknown,
  propertyKey: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor =>  {
  const fn = descriptor.value

  descriptor.value = function (...args) {    
    return fn.apply(this, args).then(response => {
      return {
        status: response.status,
        data: response.data,
        headers: response?.headers,
      }
    })
  }

  return descriptor
}
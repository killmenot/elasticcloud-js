export const Headers = (names: string[]) => (
  target: unknown,
  propertyKey: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor => {
  Reflect.defineMetadata('__elastic_cloud_headers__', { names }, descriptor.value)

  return descriptor
}

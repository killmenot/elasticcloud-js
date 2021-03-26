export const ErrorHeaders = (names: string[]) => (
  target: unknown,
  propertyKey: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor => {
  Reflect.defineMetadata('__elastic_cloud_error_headers__', { names }, descriptor.value)

  return descriptor
}

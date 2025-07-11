// Decorators
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(`Called: ${propertyKey}`);
}
class Example {
  @log
  method() {}
}

import {Container} from 'aurelia-dependency-injection';

export function injectProperty(dependency) {
  return function(target, key, descriptor) {
    let instance;
    return {
      get() {
        if (!instance) {
          instance = Container.instance.invoke(dependency);
        }
        return instance;
      }
    };
  };
}


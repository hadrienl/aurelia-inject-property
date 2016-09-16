Inject a dependency directly as a property. Instead of using @inject, then set the property in the constructor, you can only use this decorator:

# Exemple:

```
@import {injectPropery} from 'aurelia-inject-property';
@import {MyService} from 'my-service';

class MyView {
  @injectProperty(MyService} myService;

  attached() {
    this.thing = this.myService.getThing();
  }
}
```


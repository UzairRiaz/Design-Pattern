## BEHAVIOURAL DESIGN PATTERNS

### Command Pattern

-   [Command Pattern](./command.ts)
    Command pattern is a data driven design pattern and falls under behavioral pattern category. A request is wrapped under an object as command and passed to invoker object. Invoker object looks for the appropriate object which can handle this command and passes the command to the corresponding object which executes the command.

### Chain of Responsibility Pattern

-   [Chain of Resposibility](./chain.ts)
    Chain of responsibility pattern is used to achieve loose coupling in software design where a request from client is passed to a chain of objects to process them. Then the object in the chain will decide themselves who will be processing the request and whether the request is required to be sent to the next object in the chain or not.

### Observer Pattern

-   [Observer Pattern](./observer.ts)
    Observer pattern is used when there is one-to-many relationship between objects such as if one object is modified, its depenedent objects are to be notified automatically. Observer pattern falls under behavioral pattern category.

### Iterator Pattern

-   [Iterator Pattern](./iterator.ts)
    Iterator pattern is very commonly used design pattern in Java and .Net programming environment. This pattern is used to get a way to access the elements of a collection object in sequential manner without any need to know its underlying representation.

### Strategy Pattern

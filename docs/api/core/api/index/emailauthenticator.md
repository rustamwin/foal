# Table of contents

* [EmailAuthenticator][ClassDeclaration-0]
    * Methods
        * [checkPassword(user, password)][MethodDeclaration-1]
        * [authenticate(__0)][MethodDeclaration-2]
    * Properties
        * [entityClass][PropertyDeclaration-0]

# EmailAuthenticator

Authenticator with email and password.

```typescript
abstract class EmailAuthenticator<User extends EmailUser> implements IAuthenticator<User>
```

**Type parameters**

| Name | Constraint                          |
| ---- | ----------------------------------- |
| User | [EmailUser][InterfaceDeclaration-0] |
## Methods

### checkPassword(user, password)

```typescript
public async checkPassword(user: User, password: string): Promise<boolean>;
```

**Parameters**

| Name     | Type   |
| -------- | ------ |
| user     | User   |
| password | string |

**Return type**

Promise<boolean>

----------

### authenticate(__0)

```typescript
public async authenticate(__0: { email: string; password: string; }): Promise<User | null>;
```

**Parameters**

| Name | Type                                 |
| ---- | ------------------------------------ |
| __0  | { email: string; password: string; } |

**Return type**

Promise<User | null>

## Properties

### entityClass

```typescript
public abstract entityClass: Class<User>;
```

**Type**

[Class][InterfaceDeclaration-1]<User>

[ClassDeclaration-0]: emailauthenticator.md#emailauthenticator
[InterfaceDeclaration-0]: ../index.md#emailuser
[MethodDeclaration-1]: emailauthenticator.md#checkpassworduser-password
[MethodDeclaration-2]: emailauthenticator.md#authenticate__0
[PropertyDeclaration-0]: emailauthenticator.md#entityclass
[InterfaceDeclaration-1]: ../index.md#class
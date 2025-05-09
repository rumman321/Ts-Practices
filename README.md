 ## Explanation of the differences between `any`, `unknown`, and `never` types in TypeScript:

---

### 1. **`any` Type**

* **Usage**: Used when you don't want to do type checking.
* **Allows Anything**: You can assign any value and access any property or call any method without errors.
* **Bypasses Safety**: Disables TypeScript’s type-checking, so it's unsafe.
* **Example**:

  ```ts
  let value: any = 5;
  value.toUpperCase(); // No error at compile time, even though it's a number
  ```

---

### 2. **`unknown` Type**

* **Usage**: Represents any value, but safer than `any`.
* **Type-Safe**: You must perform type checking before using the value.
* **Restricts Operations**: You can't access properties or call methods without narrowing the type.
* **Example**:

  ```ts
  let value: unknown = "hello";
  // value.toUpperCase(); ❌ Error
  if (typeof value === "string") {
    value.toUpperCase(); // ✅ Safe after type check
  }
  ```

---

### 3. **`never` Type**

* **Usage**: Represents values that never occur.
* **Examples**:

  * A function that never returns (e.g., throws an error or infinite loop).
  * Exhaustive checks in switch statements.
* **Strictest Type**: Cannot assign any value to `never`.
* **Example**:

  ```ts
  function fail(message: string): never {
    throw new Error(message);
  }
  ```

---

### Summary Table:

| Type      | Description                          | Type Checking | Safe to Use? |
| --------- | ------------------------------------ | ------------- | ------------ |
| `any`     | Disables type checking               | ❌             | ❌            |
| `unknown` | Like `any`, but requires type checks | ✅             | ✅            |
| `never`   | Indicates no value ever occurs       | ✅             | ✅            |

---

## Comparison of **interfaces** vs **type aliases** in TypeScript:

---

### ✅ **1. Purpose**

* **Interface**: Defines the shape of an object (mainly for object structures).
* **Type Alias**: Can define any type, including primitives, unions, intersections, tuples, etc.

---

### ✅ **2. Extensibility**

* **Interface**:

  * Can be **extended** using `extends`.
  * Supports **declaration merging** (can define the same interface multiple times to merge).
* **Type Alias**:

  * Can be **extended** using intersection (`&`), but **cannot be merged** if re-declared.

```ts
interface A { x: number; }
interface A { y: string; } // Merges into one: { x: number, y: string }

type B = { x: number; }
// type B = { y: string; } ❌ Error: Duplicate identifier
```

---

### ✅ **3. Use Cases**

* **Interface**:

  * Preferred for defining **object shapes**, especially public APIs or class contracts.
* **Type Alias**:

  * Useful for **complex types**, like unions, tuples, mapped types, etc.

```ts
type Result = string | number | boolean; // ✅ Complex type
```

---

### ✅ **4. Performance (Internally)**

* Interfaces may be slightly more optimized by the TypeScript compiler, especially for object types.

---

### ✅ **5. Readability and Convention**

* **Interfaces**: More readable for object-oriented programming and class-based structures.
* **Types**: More flexible and expressive for advanced type manipulation.

---

### ✅ **Summary Table**

| Feature             | Interface     | Type Alias               |
| ------------------- | ------------- | ------------------------ |
| Can define objects  | ✅             | ✅                        |
| Can define unions   | ❌             | ✅                        |
| Declaration merging | ✅             | ❌                        |
| Extends             | `extends`     | Intersection `&`         |
| Preferred for       | Object shapes | Advanced/composite types |

---




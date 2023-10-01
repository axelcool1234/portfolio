# MIPS Assembly Instructions

## Standardized Instructions
Among the several different types of instructions, there are a few things about instructions that are standardized and apply to all instructions.

Here's a [fantastic reference](https://inst.eecs.berkeley.edu/~cs61c/resources/MIPS_help.html) for MIPS Assembly instructions.

### Fixed Width
Unlike many other assembly languages, all instructions are the same size (fixed width) of 32 bits. This is far simpler to other assembly languages that have variable length instructions.

### 3 Formats
MIPS uses 3 standardized instruction formats.
- Register (R-type)
- Immediate (I-type)
- Jump (J-type)

The formatting of an instruction determines how we read or access the 32 bits of an instruction.

#### Register (R-type)
![r-type](../public/img/r-type.png)

#### Immediate (I-type)
![i-type](../public/img/i-type.png)

#### Jump (J-type)
![j-type](../public/img/j-type.png)

## Categories of Instructions
There are 5 main categories of instructions.

### Load and Store
Load and Store instructions access memory.

Load and store instructions are needed in order to:
- Retrieve/load values from memory and place them into registers
- Take values from registers and place them back into memory

Load and Store instructions are the **I-type**.

### Arithmetic
Arithmetic instructions does math (add, subtract, multiply, divide, etc.)

Arithmetic instructions are the **R-type**.

### Logical
Logical instructions deal with things such as AND, OR, NOR, NOT, etc.

Logical instructions are the **R-type**.

### Branch
Branch instructions allow us to change the flow or execution of our porgram. These instructions change the flow based on a condition.

Branch instructions are the **I-type**.

### Jump
Jump instructions also allow us to change the flow of our porgram. These instructions change the flow unconditionally.

Jump instructions are the **J-type**.

### Pseudo
Pseudo instructions do not exist in hardware and only exist for ease of the user. The compiler recognizes pseudo instructions and then breaks them down into "real" instructions the hardware can handle.

Since pseudo instructions don't exist in hardware, they do not have a type.
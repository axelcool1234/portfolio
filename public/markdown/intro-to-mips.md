# Introduction to MIPS Assembly Language
## Microprocessor without Interlocked Pipeline Stages

MIPS is an *Instruction Set Architecture*. It defines the types of instructions which are implemented in hardware as well as the size and format of the instructions understood by the hardware.

The first question that should be asked is why we're learning MIPS over something more modern such as x86. The reason is that MIPS is simple, making it great for learning Assembly.

Let's see what a simple "Hello World" program looks like in C and in MIPS Assembly.

<div style="display: flex;">
  <div style="flex: 50%; padding: 10px; overflow: hidden;">

```C
#include <stdio.h>
int main()
{
    printf("Hello, World!");
    return 0
}
```
  </div>
  <div style="flex: 50%; padding: 10px; overflow: hidden;">

```assembly
.text
.globl main
main:	
	# Print a greeting on the screen
	li $v0, 4
	la $a0, greeting
	syscall
	
	# Terminate the program
	li $v0, 10
	syscall
	
.data
greeting: .asciiz "Hello World\n"
```
  </div>
</div>

Each line of assembly code is translated into their binary representations (machine language - which is what hardware understands) by the **assembler**. 

There are several different things going on in this block of code. Lets break it down.

### Comments
Comments in MIPS Assembly can be written with a `#`.
```assembly
# This is a comment!
```

### Labels
Labels help us refer to a particular line of code or a particular definition in memory. Labels underneath `.data` define data inside *memory space*. We will talk more about that later. Labels underneath `.text` refer to a line of code.

Labels appear at the start of a line. They are text folled by a semi-colon.
```assembly
label:
```
Labels are composed of alphanumeric characters (letters and digits) as well as underscores and periods. Labels **cannot** start with digits. They also cannot have special characters (such as '$' or '&' unless they are underscores or periods).

### Assembler Directives
Assembler directives are the words in the code example that start with a period. All assembler directives start with a period. 
```assembly
.text
.globl
.data
.asciiz
```
Anything we write in our file that appears after an assembler directive will belong in that directive's region until there's another assembler directive.

#### .text
`.text` defines the region inside our file that is going to give us our instructions.

#### .data
`.data` defines the region inside our file that defines our global variables.

#### .globl
`.globl` allows us to create the main label and refer to the main label externally, which means that we can begin execution of our program from a label referred to after `.globl`. In the case of our example, the label `main` can be referred to externally.

#### .asciiz
`.asciiz` declares a null terminated string in memory
<br>
<br>

There are other assembler directives such as
- `.word`: Defines a word or integer in memory (32 bit)
- `.byte`: Defines a single byte in memory

There are many more!

### Instruction Names
Instruction names such as `li`, `la`, and `syscall` tells the program what we want to do. 
- `li`: Load Immediate. 
- `la`: Load Address.
- `syscall`: Accessing the system to perform some action.

### Registers 
Registers often following instruction names such as `$v0` and `$a0` are local storage within a CPU where information is stored. This is where we'll perform all our operations on. Information or data is moved from memory using load instructions (`li` and `la`) and placed into a register (such as `$v0` or `$a0`). All operations are performed on registers because these registers are much faster than memory.

Registers are proceeded by a `$`.

Here is a table of General Purpose Registers (GPR):

| Name     | Register # | Usage                  |
|----------|------------|------------------------|
| `$zero`  | 0          | the constant value 0   |
| `$at`    | 1          | assembler temporary     |
| `$v0-$v1`| 2-3        | function return values |
| `$a0-$a3`| 4-7        | function arguments      |
| `$t0-$t7`| 8-15       | temporaries            |
| `$s0-$s7`| 16-23      | saved variables         |
| `$t8-$t9`| 24-25      | more temporaries       |
| `$k0-$k1`| 26-27      | OS temporaries         |
| `$gp`    | 28         | global pointer          |
| `$sp`    | 29         | stack pointer           |
| `$fp`    | 30         | frame pointer           |
| `$ra`    | 31         | function return address |

- $0 always holds the constant value 0.
- The **saved registers**, `$s0 - $s7`, are used to hold variables.
- The **temporary registers**, `$t0 - $t9`, are used to hold intermediate values during a larger computation.

### Syscalls
Syscalls are requests made by the program to the OS to performe a service routine (such as reading input, printing output, or quitting the program)

Here's a table of syscalls.

| Code         | System Call Code($v0) | Arguments                 | Result                 |
|--------------|-------|---------------------------|------------------------|
| print_int    | 1     | $a0=integer               |                        |
| print_float  | 2     | $f12=float                |                        |
| print_double | 3     | $f12=double               |                        |
| print_string | 4     | $a0=string                |                        |
| read_int     | 5     |                           | integer (in $v0)       |
| read_float   | 6     |                           | float (in $f0)         |
| read_double  | 7     |                           | double (in $f0)        |
| read_string  | 8     | $a0=buffer, $a1=length    |                        |
| sbrk         | 9     | $a0=amount                |                        |
| exit         | 10    |                           |                        |

`syscall` is called on its own line. In order to communicate what we want the OS to do, we must provide `$v0` a system call code. So we load in the `$v0` register with a number 1-10 and then we call `syscall` on its own line.

Some `syscall` codes have arguments. When these `syscall` codes are called, the OS will look in the relevant register for that `syscall` code. For example, if we wanted to print_int, the OS would look in the `$a0` register.

Some `syscall` codes have results. When these `syscall` codes are called, the OS will place information in the relevant register for that `syscall` code. For example, if we wanted to read_int, the OS would place the read information into the `$v0` register.

`syscall` code 10 (exit) is very important. We always want to stop execution when we are done with our program.

## Simple Format To Follow
A simple format for MIPS Assembly code is as follows (items in square brackers are optional):
```
[Label:] operation [operands] [#comment]
```

The following is a basic program structure :

```assembly
.text
.globl main

main:
# put your code/instructions here

.data
# put your global variables here
```
Remember that the code in `main` should always have an exit system call.
---
layout: post
title: nick-g.dev || Blog Post
---

&nbsp;

# Crafting Clean Code: Setting Up Projects for Maintainability and Scalability

&nbsp;

In my years of experience learning programming, I have found that most educational materials available tend to focus on learning a specific programming language and lack insight on how to set up a project while approaching development in a clean manner that can reduce some of the burdens of the initial learning curve while resulting in clean codebases that are easier to manage. This blog intends to provide a structured approach for how to achieve clean codebases that are easily scalable even with a monolithic approach of development absent of a distributed & containerized architecture. It will be helpful for those starting and trying to improve their abilities, as well as those who are skilled at a language but are looking to optimize organization in project organization & hygiene. Remember, the code examples provided should ideally be viewed on a wider desktop viewport for best readability.

&nbsp;

&nbsp;

## Topics Covered

&nbsp;

- [Universal clean coding concepts](#section-1)
- [Structuring functions and libraries for quick access](#section-2)
- [Project design concepts for CLI and GUI programs](#section-3)
- [Interpreted project setup for Python via PyCharm Community](#section-4)
- [Compiled project setup for C/C++ with Make on Linux](#section-5)
- [Considerations when approaching other languages](#section-6)
- [Conclusion](#conclusion)

&nbsp;

&nbsp;

### Universal clean coding concepts {#section-1}

&nbsp;

Though it can be easily overlooked, writing clean code can make a **massive** difference in a codebase despite whether or not it affects its functionality. This is because though functionality is a critical aspect of development there is more to software engineering as a whole. For example, code can technically be well written in functionality but is poorly presented in terms of readability and how easily it can be interpreted by others making it difficult to work with. The good news is that adopting a development approach that results in a clean codebase is not difficult, it simply takes a conscious effort. A few important points towards adopting clean coding practices:

&nbsp;

- Consistency is king in everything you do (formatting, naming conventions, documentation, etc..)
- When naming variables and functions names, be brief to avoid over naming while avoiding excessive abbreviation in naming conventions
- IDEs often have plugins that can configured to format your code every time the file is saved
- 8 space tabs are gross and spread out the code too much, 2 space tabs are decent but a bit mushed. The optimal tab spacing is 4 characters
- Avoid smashing a bunch of code together, try to organize blocks of code as logically feasible as possible while utilizing white space to accent the separation of the logic the blocks represent
- If a task is going to be repeated in a codebase, it should likely be prototyped into a function
- Use a single line of space for separating blocks of code logic in a function, while using two lines of space to separate functions, classes, code constructs, and file sections
- Avoid excessive amounts of shorthand techniques, unless there is a benefit obtained in the process all it does is reduce the readability
- Do **not** avoid the importance of thorough documentation, try to write comments while thinking about what code to write
- Unless the instruction is blatantly obvious, be sure to provide a comment that briefly explains your thought process of the instruction and how it relates to the scope of the function it resides in
- AI is helpful in adding comments to a chunk of code in a matter of seconds
- For function docstrings, most IDEs have templating features where if the single/double quote is pressed three times, the docstring template is automatically populated with the existing arguments making the process a breeze

&nbsp;

I make these suggestions from prior learning experiences where my codebases were quite messy in comparison to how they have progressed. I once spent a few days fixing around 15 projects and the clean coding concepts I had applied stuck with me due to the extensive repetition of the process. By adopting the previous clean coding practices I noticed numerous benefits:

&nbsp;

- It helps simplify development progress & project management by making the code easier to work with
- Troubleshooting bugs is much easier and less overwhelming
- Substantially easier to return to a project after a long period without having to do extensive reverse engineering to remember how the codebase works
- Consistency results in ease of understanding of where, how, and why things are implemented in the project
- It improves how a codebase can be easily understood by others while promoting collaboration
- The likelihood of bugs is reduced since engineers are less likely to overlook issues in the codebase when it is readable and easily interpreted

&nbsp;

I have implemented these clean coding concepts in most of my work at https://github.com/ngimb64 and https://github.com/TheBugFather. Both these profiles provide endless examples of clean formatting which I will be focusing on project structure for high and low-level programming languages in later sections.

&nbsp;

&nbsp;

### Structuring functions and libraries for quick access {#section-2}

&nbsp;

Typically when approaching how to layout a project, there is no singular approach that is the gold standard and each language has its styling recommendations. It is more important to establish the organization, and consistency, and to ensure various components are properly grouped by similarity. An important factor in project layout is the anticipated size. For example, say I end up writing a medium-large program in C/C++. To ensure a clean codebase layout, avoid having a ton of code in a single file where the functions are randomly placed with no logical organization.

&nbsp;

For compiled languages, I start my "main" entry point function at the bottom of the file and insert high-level functions related to the main execution of the program above as I go. This is because if I kept the main function at the top and worked my way down, I would need to specify a function prototype at the top of the file for every function created so proper reference addresses are set so the function pointer has a reference to jump when functions are called. This is because instructions are executed from the top down, so if the main function is at the bottom function references are generated in the process and do not require function prototypes in the file header.

&nbsp;

Keep the higher-level program flow on the main file where the execution entry point begins and utilize source files to segment subroutines. For example, if a program features numerous disk IO-related functions, they should likely be grouped in a source file (module in Python) and imported into the files they are called. Say there is a large number of two different types of disk IO operations that are similar, a folder should be created in the module folder with two different source files (or modules) to prevent clutter while ensuring an organized modules folder. In C/C++ header files are great to utilize for data structures, macros, static variables, and function references which can be referenced in other files.

&nbsp;

If the project size is anticipated to be large, putting function references in the corresponding header file makes it easy to reference later on when that function needs to be utilized in another source file. For a higher-level language like Python, modules are files that simply have functions in them that are imported into other files, and header files are not a thing, but it is an ideal practice to use "if \__name__ == '\__main__'" to specify the entry point for the interpreter (\__main__ is the name of the entry point file that is executed if you were to print the \__name__ while the instruction pointer is within a module the \__name__ will be the name of the module file name). Lastly, it is a good idea to have a logical method of how the src file and modules code are organized; I prefer alphabetical order due to its simplicity.

&nbsp;

&nbsp;

### Project layout concepts for CLI and GUI programs {#section-3}

&nbsp;

Approaching development project layout can vary depending on the language and the purpose. Command line interface (CLI) are a bit different from Graphical User Interface (GUI) layouts because the visual aspect of the program is derived only from print statements rather than having an entirely separate object interface from the rest of the code base derived from a UI library related to the language. While different types of programs have different purposes, most programs share the same commonality that that interact with input to achieve something while providing the result output in some manner while are different in the way input is received and output is presented.

&nbsp;

Approaching development project layout can vary depending on the language and the purpose. Command line interface (CLI) is a bit different from Graphical User Interface (GUI) layouts because the visual aspect of the program is derived only from print statements rather than having an entirely separate object interface from the rest of the code base derived from a UI library related to the language. While different types of programs have various purposes, most programs share the same commonality in that they interact with input to achieve something while providing the resulting output in some manner while are different in the way the input is received and output is presented.

&nbsp;

In CLI programs, while dynamical variables associated with the program operation can be statically typed into the code .. a much better option is to either utilize command line arguments, load data static file of a specified format (usually either YAML or TOML), or a combination of both making a single command line argument to choose the file to load the input data. Despite which of these are chosen, except for small scripts I recommend organizing the input data into object structures, whether that is classes in Python & C++ or structs in C.

&nbsp;

The class structure is especially beneficial because it maps the input data to an organized structure in memory that can be easily referenced into as many functions as desired. The structure is also quite convenient because during initialization variables are set up to prepare to store the data, then methods (which act just like functions but reside within the scope of the class) are utilized to provide input validation to ensure data is parsed into the programs memory is properly formatted.

&nbsp;

 Classes also result in cleaner code due to the reduced amount of arguments utilized in functions, which is because similar data by description or purpose can be packed into classes but only the reference to the class needs to be passed into a function to make all that data in the class accessible within the scope of that function. If additional data needs to be fed in the input and mapped to the program, having this structure makes it incredibly convenient since class structures are already referenced within program functions so only variables need to be added to the class. If additional class references can always be passed as a reference argument into newly added functions.

&nbsp;

GUI programs are a bit different since typically an application is initialized at a blank state and there is typically a button on the user interface that allows the user to select a file on disk. This means that command line args are usually not even a concern and are more exclusive to CLI design. Considering the GUI itself will act as a frontend that the user can interface to pass input to the backend and receive output displayed back on the frontend, it makes developing a GUI application a good primer in moving towards the complexities of web-based full stack application development. Aside from the difference in user input, the development process is very similar but has extra logic to integrate the front-end functionality.

&nbsp;

An ideal example is a Virus Total client I created, which has a CLI and GUI integrated into the project with some shared components between the two (https://github.com/ngimb64/Virus-Total-PyClient).

&nbsp;

&nbsp;

### Interpreted project setup for Python via PyCharm Community {#section-4}

&nbsp;

Setting up a project is not often explained in depth in most Python courses that only provide basic examples. While I am not going to write an entire project I want to show how I would go by structuring and setting up a project in a step-by-step fashion. There are other IDEs and ways to write Python but PyCharm is my personal favorite and the free community edition is excellent and has everything I need for my scope of development.

&nbsp;

- If you do not have a GitHub account, now is the time to make one (utilizing Git version control in projects is essential)
- Create a name for your project and create a private repository with that name assigned to it
- In a terminal, change directory to where the project should reside
- On the web browser in GitHub, after creating a repository the window should be empty, and on the right side there should be a button named "Code". Click on it to access a drop-down menu and copy the https URL clone link to download the repository
- If you are wondering why bother cloning an empty repository? It is not necessary, but I find it easier than having to connect the remote repository from the local via the command line via git

&nbsp;

<center>
Now paste the copied clone link into this syntax in the terminal and hit enter to download it
</center>
```
git clone <https_clone_url>
```

&nbsp;

- For solo development efforts, writing in the main branch for the initial pull request (code to be uploaded) is ok, but further pull requests should be developed in their temporary branch and then merged into the main branch via GitHub in the browser
- Add a .gitignore file to to specify which files that git should ignore tracking, for example, "venv/" should be added in a project to prevent adding a local virtual environment. What needs to be ignored varies for every project and it is one of those things where some entries can be initially added but all potential things to be ignored will not be known so add what is needed as the project progresses

&nbsp;

The following are the essential git commands to get things going:

&nbsp;

<center>
Create a temporary dev branch with content of current branch and switch into that branch
</center>
```
git checkout -b dev
```

&nbsp;

<center>
List branches and specify current branch
</center>
```
git branch
```

&nbsp;

<center>
Switch branch
</center>
```
git checkout <branch_name>
```

&nbsp;

**Note**:  running above command on non-existent branch will also create an empty branch

&nbsp;

<center>
List current branch, changes staged for commit, and untracked files
</center>
```
git status
```

&nbsp;

<center>
Add files to git tracking system
</center>
```
git add <file_name>
```

&nbsp;

**Note**:  instead of adding a single file, git can add all the untracked files with the --all flag instead of specifying a file name

&nbsp;

<center>
Commit added files
</center>
```
git commit -m "<commit_message>"
```

&nbsp;

<center>
Push the changes to remote dev branch
</center>
```
git push origin dev
```

&nbsp;

<center>
Pull changes to remote dev branch
</center>
```
git pull origin dev
```

&nbsp;

<center>
Delete the temporary dev branch
</center>
```
git branch -D dev
```

&nbsp;

**Note**:  dev is just an example that I use frequently, branches can be named anything but try to be logical about naming

&nbsp;

Now that git is out of the way, the focus will be shifted to setting up the project! However, I highly recommended studying a fantastic book called "Pro Git" by Scott Chacon which helped me significantly with some of the complexities of how git works. Also, that is not a sponsored recommendation and just a personal one.

&nbsp;

- In the project root directory, create a file with the associated language utilized with the same name as the project name
- If the anticipated project size is large, it would be ideal to go ahead to make a folder for modular code that will be imported into other code like modules in Python

&nbsp;

This is an example of an ideal project setup (utilize optional with medium-large scope projects):

&nbsp;

```
├── README.md            # Project documentation
├── requirements.txt     # List of dependencies (if external packages are used)
├── setup.py             # Script for installing your package
├── main.py              # Main script to execute
├── modules/             # Source code
│   ├── __init__.py      # Initialize package
│   ├── module1.py       # Python module 1
│   └── module2.py       # Python module 2
├── tests/               # Unit tests (optional)
│   ├── test_module1.py  # Test cases for module1
│   └── test_module2.py  # Test cases for module2
└── docs/                # Documentation folder (optional)
```

&nbsp;

- Depending on the project scope and language determine what additional files to anticipate in the project
- For example, a Python project that utilizes third-party packages should have a package list named requirements.txt, but the name does not matter and I usually name it packages.txt because it feels a bit more concise.
- When I work on web development, my go-to framework is Tailwind CSS, which is an autoformatting plugin like Prettier that is needed for efficiency and avoiding troubleshooting nightmares due to the high amount of utilized class names at various breakpoints. In the process I have to create two different files to get it set up before development, .prettierrc.json and the .prettierignore
- To finish setup, ensure to build a venv from the base interpreter of the system. In Pycharm, this is achieved by going to File -> Settings -> Project: \<project_name> -> Python Interpreter -> Add interpreter -> Add local interpreter -> Set Environment to Existing -> Confirm interpreter path is base interpreter on system -> Click OK
- Once setup is complete is it time to start structure the project's initial code structure

&nbsp;

The example below provides the initial structure in the main file named after the project that is executed with comments to explain the intended layout:

&nbsp;

```
# Modules that built-in the Python language like os, system, time go first in alphabetical order
# Relative imports go before direct imports, which means "import sys" would go before "from os import getcwd"

# The third-party modules should be placed in the section below the built-in modules in the same order

# The custom modules locally developed for the project should go here under the third-party modules
from Modules.io import file_handler


# Global variables here


def func2():
    # More code


def func3():
    # More code
    return result


def func1():
    # More code
    return func3()


def main(program_config):
    # This section dives into the more in depth inner scope of the programs main operation
    # Ensure to pay attention to how the functions are structured based on the order they are accessed by the instruction pointer

    # Functions whos purpose is relative to the main operation can stay in the file (in this example any func functions)
    data = func1()

    # A function like an IO operating writing output to disk is more a general function ideal for a module
    # This function would be created in a file stored at "Modules/io.py" in relation to root dir and imported at header
    file_handler(file_path, mode, data)

    func2()


class ProgramConfig:
    def __init__(self):
        # When setting up a class, if unsure of the initial data to be entered use None which is null in Python
        self.ip_addr = None
        self.file_path = None
        self.num_iterations = None

    def validate_ip_addr(self, input_addr):
        # Input validation code goes here

        # This only occurs if input validation tests pass
        self.ip_addr = input_addr

    def validate_file_path(self, input_path):
        # Same concept as above method

    def validate_num_iterations(self, input_iterations):
        # Same concept as first method


# Establish the explicit entry point for interpreter (start here and work upward in the file after section is analyzed)
if __name__ == '__main__':
    # This section should be about configuring the program in general and the highest level scope of execution

    # If the input is strictly via command line args this is where argument parsing occurs
    # If there are only a few args sys.argv works fine, but argparse is ideal for larger configurations
    OR
    # If the input is via a configuration file like YAML or TOML, then there should only be one to a few args tops
    # It might be a good idea to implement a logic that prompts the user for input if initial input is empty or fails

    # If the program is of sufficient size set up a program configuration class and initialze it
    # Then create input valdations methods in the program configuration class and pass the input data into them
    # Once validated the data can be stored in the configuration class (refer to ProgramConfig class above)
    program_config = ProgramConfig()

    # This is how data would be validated
    program_config.validate_ip_addr(input_ip)
    program_config.validate_file_path(input_path)
    program_config.validate_num_iterations(input_iterations)

    # Otherwise if there are only a few arguments they could potentially be packed as a tuple or just passed directly into main

    # Depending on the program size (ignore for scripts and small programs), set up the logging here
    # That way any logging components or references to log files can be easily stored in the program config class

    # Also keep in mind, ProgramConfig is the only class in this example but the concept can be utilized in similar ways
    # For example, in my capstone project there was at least a program config class, a class for housing a regex library
    # with search methods, and a class associated with input template data

    # While just calling main is fine, encapsulating it in a try-except statement during development is handy for
    # getting the full stack traceback when an unknown exception occurred without having to replicate the event
    try:
        main(program_config)

    # Exception handler occurs if unknown exception occurs that is not caught in scope of main
    except Exception:
        # This ensures that the exceptions full stack trace is displayed (not safe for production, dev only)
        import traceback
        traceback.print_exc()

        # This sections logic could also be adjusted where to the above code runs when the program is
        # set to debug mode or exception information is stored locally to a file (not the most secure)
        # or to a remote logging system (ideal for production enviroments)

# The interpreter prefers a single whitespace at the bottom of the file

```

&nbsp;

&nbsp;

### Compiled project setup for C/C++ with Make on Linux {#section-5}

&nbsp;

This section is going to be much less detailed in terms of the code considering my C/C++ is structured the same way as Python with mainly differences in syntax. Once the syntax is down, it can be approached in the same manner but the interpreter entry point does not need to be specified because it is compiled and not interpreted. I would set up the main function (which acts as an entry point) at the bottom of the file and work my way up in an identical manner as demonstrated in the last section.

&nbsp;

I think this is beneficial over working downward because when the instructions are processed, the parser begins from the top of the file left to right working its way down. So if the entry point function is at the bottom of the file, by the time it is executed the other functions have been processed so their address is known. This prevents having to write function prototypes at the top of the file to ensure the function addresses are known for when the instruction pointer jumps to their location.

&nbsp;

Aside from the code aspect, the big difference is setting up a project for compilation builds. This example will feature using Make on Linux, for Windows I would use Visual Studio and follow their recommended instructions. While Make has solid documentation, the last time I checked it seemed to lack adequate examples for a robust build environment. For the start of this section, refer to the initial steps of the previous section to get set up with git and get ready to add files and directory structure to the project.

&nbsp;

This is an ideal project setup (utilize optional with medium-large scope projects):

&nbsp;

```
├── src/       # Source files
├── include/   # Header files
├── obj/       # Object files (generated by Make)
├── bin/       # Binary files (executables)
├── lib/       # External libraries
├── docs/      # Documentation (optional)
├── tests/     # Unit tests (optional)
└── README.md  # Project documentation
```

&nbsp;

- Once the directory layout is set up, add any additional files (plugin config files, etc.)
- Now it is time to set up the build process with Make to be able to proceed with the development

&nbsp;

This is an makefile example put together based off a project in C++:

&nbsp;

```
# Set the compiler and flags
CXX=g++
CXXFLAGS=-g -Wall
# Set the linker flags
LD_FLAGS=

# Configure project directories (src & hdrs manually created)
SRC_DIR=src
HDR_DIR=include
OBJ_DIR=obj
BIN_DIR=bin

# Configure project files
HDR_FILES=$(wildcard $(HDR_DIR)/*.h)
SRC_FILES=$(wildcard $(SRC_DIR)/*.cpp)
OBJ_FILES=$(patsubst $(SRC_DIR)/%.cpp,$(OBJ_DIR)/%.o,$(SRC_FILES))
BINARY=$(BIN_DIR)/ResultingBinary

# Executable recipe
all: $(BINARY)

$(BINARY): $(OBJ_FILES) | $(BIN_DIR)
    $(CXX) $(CXXFLAGS) $(OBJ_FILES) $(LD_FLAGS) -o $@

# Object files recipe
$(OBJ_DIR)/%.o: $(SRC_DIR)/%.cpp | $(OBJ_DIR)
    $(CXX) $(CXXFLAGS) -I$(HDR_DIR) -c $< -o $@

# Ensure directory creation of obj & bin folders
$(OBJ_DIR):
    mkdir -p $@

$(BIN_DIR):
    mkdir -p $@

# Clean up old binaries
clean:
    rm -rf $(BIN_DIR)/*

# Clean up old binaries and object files
distclean:
    rm -rf $(BIN_DIR) $(OBJ_DIR)
```

&nbsp;

**Note**:  for a C project, the difference is the first two lines should change like below and update the variables in the file. In addition, linker flags are utilized for linking libraries, such as using multi-threading

&nbsp;

```
CC=gcc
CCFLAGS=-g -wall
```

&nbsp;

So now the makefile will simply the build process by simply using the command "make" when in the same directory. In between project builds, the command "make clean" should be run to ensure the binary directories are fresh per build, and the command "make distclean" can be used to delete the binary and object file directories. At this point, development and layout are approached almost the same with any language in combination with compensating the nuances of the language, so when in doubt refer to the layout in the previous example but remember that the compiled languages entry point is the main function so exclude the if \__name__ == '\__main__' entry point section for the interpreter.

&nbsp;

&nbsp;

### Considerations when approaching other languages {#section-6}

&nbsp;

Most clean coding concepts previously discussed can be applied to any other language to achieve an identical result. Once a solid understanding of a high-level language like Python and a lower-level language like C/C++ (bonus points for assembly) is obtained, that factor combined with some of the advancements in AI tooling makes it easier than ever to translate knowledge to another language. Just ensure to review the official documentation thoroughly, and styling suggestions, and ensure proper planning before jumping right into development. Planning is a critical aspect and often rushing to develop something too quickly results in excessive logic and a substantial time investment increase in refactoring and cleaning up the rushed code.

&nbsp;

&nbsp;

### Conclusion {#conclusion}

&nbsp;

In conclusion, adopting clean coding principles and efficient project structuring is crucial regardless of the programming language or project type. By understanding universal clean coding concepts, efficiently structuring functions and libraries, and considering thoughtful design for CLI and GUI programs, developers can enhance code readability, maintainability, and scalability. Whether setting up interpreted projects in Python using PyCharm Community or compiling C/C++ projects with Make on Linux, the foundational principles remain consistent.

&nbsp;

Moreover, exploring other languages requires careful consideration of language-specific nuances while applying these fundamental practices. By integrating these insights into your workflow, you not only streamline development but also set the stage for more robust and sustainable software projects.

---
layout: post
title: nick-g.dev || Blog Post
---

&nbsp;

# Crafting Clean Code: Setting Up Projects for Maintainability and Scalability

&nbsp;

In my years of experiences learning programming, I have found that most educational materials available tend to focus on learning a specific programming language and lack insight on how to set up a project while approaching development in a clean manner that can reduce some of the burdens of the initial learning curve while resulting in clean codebases that are easier to manage. This blog intends to provide a structured approach for how to achieve clean codebases that are easily scalable even with a monolithic approach of development absent of a distributed & containerized architecture. It will be helpful for those starting out and trying to improve their abilities, as well as those who are skilled at a language but are looking to optimize organziation in project organization & hygene.

&nbsp;

&nbsp;

## Topics Covered

&nbsp;

The topics that will be covered are:

&nbsp;

- Universal clean coding concepts
- Structuring functions and libraries for quick access
- Project design concepts for CLI and GUI programs
- Interpreted project setup for Python via Pycharm Community
- Compiled project setup for C/C++ with Make on Linux
- Considerations when approaching other languages

&nbsp;

### Universal clean coding concepts

&nbsp;

Though it can be easily overlooked, writing clean code can make a **massive** difference on a codebase despite whether or not it has an effect on it's functionality. The reason is because though functionality is a critical aspect of development it is not everything. For example, code can technically be well written in functionality but is poorly presented in terms of readability and how easily it can be interpreted by others making it difficult to work with. The good news is that adopting a development approach that results in a clean codebase is not difficult, it simply takes a concious effort. A few important points towards adopting clean coding practices:

&nbsp;

- Consistency is king in everything you do (formatting, naming conventions, documentation, etc..)
- When naming variables and functions names, be brief to avoid overnaming while avoiding excessive abbreviation in naming conventions
- IDEs often have plugins that can configured to format your code everytime the file is saved
- 8 space tabs are gross and spread out the code too much, 2 space tabs are decent but a bit mushed. The optimal tab spacing is 4 characters
- Avoid smashing a bunch code together, try to organize blocks of code as logically feasible as possible while utilizing white space to accent the separation of the logic the blocks represent
- If a task is going to be repeated in a codebase, it should likely be prototyped into a function
- Use a single line of space for separating blocks of code logic in a function, while using two lines of space to separate functions, classes, code constructs, and file sections
- Avoid excessive amounts of shorthand techniques, they can be neat but unless there is a benefit obtained in the process all it really does is reduce readability
- Do **not** avoid the importance of thourghough documentation. Unless the instruction is blatently obvious, ensure to provide a comment that briefly explains your thought process of the instruction and how it relates to the scope of the function it resides in. If needed, AI can be utilized to assist in adding comments to a chunk of code. For function docstrings, most IDEs have templating features where if the single/double quote is pressed three times, the docstring template is automatically populated with the existing arguments making the process a breeze.

&nbsp;

I make these suggestions from prior learning experiences where my codebases were quite messy in comparison to how they have progressed. I once spent a few days fixing around 15 projects and the clean coding coding concepts I had applied really stuck with me due to the extensive repition of the process. By adopting the previous clean coding practices I noticed numerous benefits:

&nbsp;

- It helps simplify development progress & project management by making the code easier to work with
- Troubleshooting bugs much easier and less overwhelming
- It makes it substantially easier to return to a project after a long period of time without having to do extensive reverse engineering just to remember what the codebase does
- Consistency results in ease of understand of where, how, and why things implemented in the project
- It improves how a codebase can be easily understood by others while promoting collaboration
- The likelyhood of bugs is reduced since engineers are less likely to overlook issues in the codebase when it is readible and easily interpreted

I have implemented these clean coding concepts on most of work at https://github.com/ngimb64 and https://github.com/TheBugFather. Both these profile provide endless examples of clean formatting which I will be focusing on project structure for a high and low level programing languages in later sections.

&nbsp;

&nbsp;

### Structuring functions and libraries for quick access

&nbsp;

Typically when approaching how to layout a project, there is no singular approach that is the gold standard and each language has its own styling recommendations. It is more important to establish organization, consistency, and to ensure various components are properly group together by similarity. A very important factor on project layout is the anticipated size. For example, say I end up writing a large program in C/C++. To ensure a clean codebase layout, avoid having a ton code in a single file where the functions are randomly placed with no logical organization.

&nbsp;

For compiled languages, I start my "main" entry point function at the bottom of the file and insert high level functions related to the main execution of the program above as I go. This is becasue if kept main at the top and worked my way down, I would need to specify a function prototype at the top of the file for every function created to so proper reference address are set so the function pointer has a reference to jump when functions are called. This is because instruction are executed from the top down, so if main is at the bottom function references are generated in the process and do not require function prototypes.

&nbsp;

Keep the the higher level program flow on the main file where the exection entry point begins and utilize source files to segment subroutines. For example, if a program features numerous disk IO related functions, they should likely be grouped together in a source file (module in Python) and imported into the files they are called. Say there is a large number of two different types of disk IO operations that are similar, a folder should be created in the module folder with two different source files (or modules) to prevent clutter while ensuring an organized modules folder. In C/C++ header file are great to utilize for data structures, macros, static variables, and function references for using functions properly in other files.

&nbsp;

If the project size is anticipated to be large, putting function references in the corresponding header file makes it easy to reference later on when that function needs to be utilized in another source file. For a higher level language like Python, modules are files that simply have functions in them that are imported into other files and header file are not a thing, but it is ideal practice to use "if \__name__ == '\__main__'" to specificy the entry point for the interpreter (\__main__ is the name of the entry point file that is executed, if you were to print the \__name__ while the instruction pointer is within a module the \__name__ will be the name of the module file). Lastly, it is a good idea to have a logical method how src file and modules code is organized; personally I prefer alphabetical order due to it's simplicity.

&nbsp;

&nbsp;

### Project layout concepts for CLI and GUI programs

&nbsp;

When approaching development project layout can vary depending on the language and the purpose. Command line interface (CLI) are a bit different from Graphical User Interface (GUI) layouts because the visual aspect of the program is derived only from print statements rather than having an entirely separate object interface from the rest of the code base derived from a UI library related to the language. While different types of programs have different purposes, most programs share the same commonality that that interact with input to achieve something while providing the result output in some manner while are different in the way input is received and output is presented.

&nbsp;

In CLI programs, while dynamical variable associated with the programs operation can be statically type into the code .. a much better option is to either utilize command line arguments, load data static file of a specified format (usually either YAML or TOML), or a combination of both making a single command line argument to choose the file to load the input data. Despite which of these are chosen, with the exception of small scripts I recommend organizing the input data into object structures, whether that is classes in Python & C++ or structs in C. The class structure is especially beneficial because it maps the input data to an organized structure in memory that can be easily referenced into as many functions as desired. The structure is also quite convienent because during initialization variables are set up to prepare to store the data, then methods (which act just like functions but reside within the scope of the class) are utilized to provide input validation to ensure data being parsed into the programs memory is properly formated.

&nbsp;

 Classes also result in cleaner code due to the reduced amount arguments utilized in functions, which is because data can be packed into classes but only the reference to the class needs to be passed into a function to make all that data in the class accessable within the scope of that function. If additional data need to be feed in the input and mapped to the program, having this structure makes it incredibly convient since class structures are already referenced within program functions so only variables needed to be added to class, and if need additional class references can always be passed as a reference argument into newly added functions.

&nbsp;

GUI programs are a bit different since typically an application is initialized at a blank state and there is typically a button on the user interface that allows the user to select a file on disk. This means that command line args are usually not even a concern and are more exclusive to CLI design. Considering the GUI itself will act as a frontend that the user is able to interface to pass input to the backend and receive output displayed back on the frontend, it makes developing a GUI application a good primer in moving towards the complexities of web-based full stack application development. Aside from the difference of user input, the development process is very similar but has extra logic to integrate the front end logic.

&nbsp;

An ideal example is a Virus Total client I created, which has a CLI and GUI integrated into the project with some shared components between the two (https://github.com/ngimb64/Virus-Total-PyClient).

&nbsp;

&nbsp;

### Interpreted project setup for Python via Pycharm Community

&nbsp;

Setting up a project is not often explained in depth in most Python courses that only provide basic examples. While I am not going to write an entire project I want to show how I would go by structuring and setting up a project in a step by step fashion. There are other IDEs and ways to write Python but Pycharm is my personal favorite and the free community edition is excellent and has everything I need for my scope of development.

&nbsp;

- If you do not have a github account, now is the time to make one (utilizing git version control in projects is essential)
- Create a name for your project and create a private repository with that name assigned to it
- In a terminal, change directory to where the project should reside
- On the web browser in Github, after creating a repository the window should be empty and on the right side there should be a button name "Code". Click on it to access a drop down menu and copy the https url clone link to download the repository
- If you are wondering why bother cloning an empty repository? It is not necessary, but I find it easier than having to connect the remote repository from the local via the command line via git

&nbsp;

Now paste the copied clone link into this syntax in the terminal and hit enter to download it:

&nbsp;

```
git clone <https_clone_url>
```

&nbsp;

- Writing in the main branch for the initial pull request (code to be uploaded) is ok especially for solo development efforts, but further pull request should be developed in their own temporary branch then merged into the main branch via github in the browser
- Add a .gitignore file to to specify which files that git should ignore tracking, for example "venv/" should be added in a project to prevent adding local virtual enviroment. What needs to be ignored varies for every project and it one of those things where some entries can be initially added but all potential things to be ignored will not be known so add what is needed as the project progresses

&nbsp;

The following are the essential git commands to get things going:

&nbsp;

Create a temporary dev branch with content of current branch and switch into that branch

&nbsp;

```
git checkout -b dev
```

&nbsp;

List branches and specify current branch

&nbsp;

```
git branch
```

&nbsp;

Switch branch (running this command on non-existent branch will also create an empty branch)

&nbsp;

```
git checkout <branch_name>
```

&nbsp;

List current branch, changes staged for commit, and untracked files

&nbsp;

```
git status
```

&nbsp;

Add files to git tracking system

&nbsp;

```
git add <file_name>
```

&nbsp;

**Note**:  instead of adding a single file, git can add all the untracked files with the --all flag instead of specifying a file name

&nbsp;

Commit added files

&nbsp;

```
git commit -m "<commit_message>"
```

&nbsp;

Push the changes to remote dev branch

&nbsp;

```
git push origin dev
```

&nbsp;

Delete the temporary dev branch branch

&nbsp;

```
git branch -D dev
```

&nbsp;

**Note**:  dev is just an example that I use frequently, branches can be named anything but try to be logical about naming

&nbsp;

Now that git is out of the way, focus will be shifted to setting up the project! Though I highly recommended studying a fantastic book called "Pro Git" by Scott Chacon which helped me significantly with some of the complexities of how git works. Also that is not a sponsored recommendation and just my personal one.

&nbsp;

- In the projects root directory, create a file with associated language utilized with the same name as the project name
- If the anticipated project size is large, it would be ideal to go ahead to make a folder for modular code that will be imported into other code like modules in Python

&nbsp;

This is an example of an ideal project setup (utilize optional with medium-large scope projects):

&nbsp;

```
├── README.md           # Project documentation
├── requirements.txt    # List of dependencies (if external packages are used)
├── setup.py            # Script for installing your package
├── main.py             # Main script to execute
├── modules/            # Source code
│   ├── __init__.py     # Initialize package
│   ├── module1.py      # Python module 1
│   └── module2.py      # Python module 2
├── tests/              # Unit tests (optional)
│   ├── test_module1.py # Test cases for module1
│   └── test_module2.py # Test cases for module2
└── docs/               # Documentation folder (optional)
```

&nbsp;

- Depending on the project scope and language determines what additional files to anticipate in the project. For example a Python project that utilizes third party packages should have a package list named requirements.txt, but the name does not matter and I usually name it packages.txt because it feels a bit more concise. When I work on web development, my go to framework is Tailwind CSS, which a autoformatting plugin like prettier is needed for efficiency and avoiding troubleshooting nightmares due to the high amount of utilized classnames at various breakpoints. In the process I have to create two different files to get it set up prior to development, .prettierrc.json and the .prettierignore
- To finish setup, ensure to build a venv from the base interpreter of the system. In Pycharm, this is achieved by going to File -> Settings -> Project: <\project_name> -> Python Interpreter -> Add interpreter -> Add local interpreter -> Set Environment to Existing -> Confirm interpreter path is base interpreter on system -> Click OK
- Once setup is complete is it time to actually start structure the projects initial code structure

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


def main():
	# This section dives into the more in depth inner scope of the programs main operation
	# Ensure to pay attention to how the functions are structured based on the order they are accessed by the instruction pointer

	# Functions whos purpose is relative to the main operation can stay in the file (in this example any func functions)
	data = func1()

	# While a function like an IO operating writing output to disk is more a general function ideal for a module
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
	# If there are only a few args sys.argv works fine, but argparse should be used for larger configurations
	OR
	# IF the input is via a configuration file like YAML or TOML, then there should only be a few args tops
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
	# For example, in my capstone project there was at least a program config class, a class for housing a regex library # with search methods, and a class associated with input template data

	# While just calling main is fine, encapsulating it in a try-except statement during development is handy for
	# getting the full stack traceback when an unknown exception occurred  without having to replicate the event
	try:
		main(program_config)

	# Exception handler occurs if unknown exception occurs that is not caught in scope of main
	except Exception:
		# This ensures that the full stack trace of the exception is displayed
		import traceback
		traceback.print_exc()

# The interpreter prefers a single whitespace at the bottom of the file

```

&nbsp;

&nbsp;

### Compiled project setup for C/C++ with Make on Linux

&nbsp;

This section is going to be much less detailed in terms of the code considering my C/C++ is structured the same way as Python with mainly differences in syntax. Once the syntax is down, it can be approached in the same manner but the interpreter entrypoint does not need to be specified because it is compiled and not interpreted. I would set up the main function (acts as entrypoint) at the bottom of the file and work my way up in an identical manner as demonstrated in the last section. I think this is beneficial over working downward because when the instructions are processed, the parser begins from the top of the file left to right working its way down. So if the entrypoint function is at the bottom of the file, by the time it is executed the other functions have been processed so their address is known. This prevents having to write function prototypes at the top of the file to ensure the function addresses are known for when the instruction pointer jumps to their location.

Aside from the code aspect, the big difference is setting up a project for compilation builds. This example will feature using Make on Linux, for Windows I would use Visual Studio and follow their recommeded instructions. While Make has documentation that is solid, the last time I checked it seemed to lack adequate examples for a robust build enviroment. For the start of this section, refer to the initial steps of the previous section to get set up with git and get ready to add files and directory structure to the project.

&nbsp;

This is an ideal project setup (utilize optional with medium-large scope projects):

&nbsp;

```
├── src/			 # Source files
├── include/		 # Header files
├── obj/			 # Object files (generated by Make)
├── bin/			 # Binary files (executables)
├── lib/             # External libraries
├── docs/            # Documentation (optional)
├── tests/           # Unit tests (optional)
└── README.md		 # Project documentation
```

&nbsp;

- Once the directory layout is setup, add any additional files (plugin config files, etc.)
- Now it is time to set up the build process with make to be able to proceed with development

&nbsp;

This is an example put together based of a project in C++:

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
BINARY=$(BIN_DIR)/ResultingBinary.exe

# Executable recipe
all: $(BINARY)

$(BINARY): $(OBJ_FILES) | $(BIN_DIR)
	$(CXX) $(CXXFLAGS) $(OBJ_FILES) $(LD_FLAGS) -o $@

# Object files recipe
$(OBJ_DIR)/%.o: $(SRC_DIR)/%.cpp $(HDR_FILES) | $(OBJ_DIR)
	$(CXX) $(CXXFLAGS) -c $< -o $@

# Ensure directory creation of obj & bin folders
$(OBJ_DIR):
	mkdir -p $@

$(BIN_DIR):
	mkdir -p $@

# Clean up old bins & object files before compilation
clean:
	rm -rf $(BIN_DIR)/* $(OBJ_DIR)/*
```

&nbsp;

**Note**:  for a C project, the difference is the first two lines should change like below and update the variables in the file. In addition, linker flags are utilized like for linking libraries, like if the program uses multi-threading

&nbsp;

```
CC=gcc
CCFLAGS=-g -wall
```

&nbsp;

So now the makefile will simply the build process by simply using the command "make" when in the same directory. In between project builds, the command "make clean" should be run to ensure the object and binary directories are fresh per build. At this point, development and layout is approach almost the same with any language in combination with compensating the languages nuances, so when in doubt refer the layout in the previous example but remember that compiled languages entry point is main so exclude the if \__name__ == '\__main__' entry point section for the interpreter.

&nbsp;

&nbsp;

### Considerations when approaching other languages

&nbsp;

Most of the clean coding concepts discussed can be applied to any other languages to achieve an indentical result. Once a solid of understanding of a high level language like Python and a lower level language like C/C++ (bonus points for assembly) is obtained, that factor combined with some of the advancements in AI tooling makes it easier than ever to translate knowledge to another language. Just make sure to throughly review the official documentation throughoughly, styling suggestions, and ensure proper planning before jumping right into development. Planning is a critical aspect and often rushing to develop something too quickly results in excessive logic and a substantial time investment increase in refactoring and cleaning up the rushed code.

&nbsp;

&nbsp;

### Conclusion

&nbsp;

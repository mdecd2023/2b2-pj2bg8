var tipuesearch = {"pages": [{'title': 'About', 'text': '2b2- pj2bg8 \n \n 倉儲:\xa0 https://github.com/mdecd2023/2b2-pj2bg8 \n 網站連結:\xa0 https://mdecd2023.github.io/2b2-pj2bg8/content/index.html \n 人員 \n 41023212 yonqui0411 \n 41023229 CHI1020 \n 41023242 41023242 \n \n https://mde.tw/pjcopsim \n', 'tags': '', 'url': 'About.html'}, {'title': 'w9', 'text': '', 'tags': '', 'url': 'w9.html'}, {'title': '41023202', 'text': '轉檔過程 \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n football STL檔 \n \n', 'tags': '', 'url': '41023202.html'}, {'title': '41023212', 'text': '心得:這次是請教同學，學到了怎麼自查ip位置和如何使用於課程教材 \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': '41023212.html'}, {'title': '41023229', 'text': '\n \n \n \n 心得:這次機器人的操做可以手動控制，連線比之前還要複雜難懂，繼續加油。 \n', 'tags': '', 'url': '41023229.html'}, {'title': '41023242', 'text': '\n 心得:這次的機器人連線測試我覺得跟之前的比較起來，這一次的困難許多，要連同一個IP才能達到連線，也謝謝老師與同學們的教導。 \n', 'tags': '', 'url': '41023242.html'}, {'title': 'w10', 'text': '41023202:試著理解老師的題目以及幫助組長做的。 \n \n 41023229:了解老師的題目， \n 41023242:詢問同學協助組長，不會地問GPT，也有在cd2023尋找問題 \n \n 41023212製作亂數抽組。 \n 亂數 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  亂數 開始  \n \n \n  亂數 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n', 'tags': '', 'url': 'w10.html'}, {'title': '有關CoppeliaSim zmpRemoteAPI', 'text': '1.What is zmqRemoteAPI, and how does it relate to CoppeliaSim? zmqRemoteAPI是一種消息傳遞協議，使用ZeroMQ消息庫在網路上實現不同進程或電腦之間的通訊。它被用於CoppeliaSim這個流行的機器人仿真軟體中，提供了一種遠端應用程式編程介面（API），使得使用者可以用不同的程式語言控制和與仿真環境交互。 換句話說，zmqRemoteAPI提供了一種外部程式與CoppeliaSim通訊的方式，允許使用者控制仿真環境、發送命令到機器人和傳感器，並從仿真中檢索資料。這使得可以創建使用CoppeliaSim作為仿真引擎的自定義應用程式，從而實現更先進的機器人研究和開發。 zmqRemoteAPI提供同步和非同步兩個版本，允許使用者根據自己的需要選擇適當的方法。同步版本允許輕鬆集成支援同步通訊的程式語言，而非同步版本則允許與CoppeliaSim進行更靈活和高效的通訊。 總的來說，zmqRemoteAPI是CoppeliaSim的一個重要特性，使得與其他軟體的集成變得容易，同時也使得機器人研究和開發變得更加先進。 \n 2.How do you establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI? 使用zmqRemoteAPI建立Python腳本和CoppeliaSim之間的連接需要完成以下步驟： 在CoppeliaSim中啟用遠程API功能：在CoppeliaSim的“選項”菜單中，勾選“遠程API服務器”。確定設置無誤後，重新啟動CoppeliaSim。 在Python中安裝pyzmq庫：使用pip命令安裝pyzmq庫，以便在Python腳本中使用zmqRemoteAPI。 編寫Python腳本：編寫Python腳本以使用zmqRemoteAPI與CoppeliaSim進行通訊。首先，創建一個zmq.Context對象，然後創建一個zmq.REQ（要求）套接字，並使用connect()方法將套接字連接到CoppeliaSim的遠程API服務器地址。 通訊：使用zmq.REQ套接字向CoppeliaSim發送請求。zmq.REQ套接字使用send()方法發送二進制數據，並使用recv()方法接收CoppeliaSim的回應數據。發送和接收的消息格式需要按照zmqRemoteAPI文檔的規定進行編碼和解碼。 總的來說，通過上述步驟可以使用Python腳本與CoppeliaSim進行通訊，實現對機器人仿真環境的控制和數據交換。 \n 3.What are some common use cases for zmqRemoteAPI in CoppeliaSim? zmqRemoteAPI在CoppeliaSim中有許多常見的用例，下面列出其中幾個： 機器人控制：使用zmqRemoteAPI，可以在Python、C++等程式語言中編寫控制機器人的代碼，並通過與CoppeliaSim的通訊將其應用於仿真環境中。這使得可以測試機器人的運動、感知和控制算法，並且可以與實際硬體進行比較。 軌跡規劃：通過zmqRemoteAPI，可以在Python中使用各種規劃算法計算機器人的運動軌跡，然後將軌跡傳遞給CoppeliaSim以顯示機器人的運動軌跡。 场景控制：可以使用zmqRemoteAPI對CoppeliaSim的場景進行控制，例如更改場景中物體的位置、旋轉角度、添加新的物體等等。這使得可以創建自定義的仿真場景，並且可以測試機器人在不同環境下的表現。 資料檢索：使用zmqRemoteAPI，可以從CoppeliaSim中獲取各種資料，例如機器人的位置、速度、傳感器數據等等。這對於監控仿真運行狀態、測試算法的性能等都非常有用。 總的來說，zmqRemoteAPI在CoppeliaSim中被廣泛應用，可用於各種機器人研究和開發場景，使得使用者可以更輕鬆地控制仿真環境，並進行各種測試和分析。 \n 4.What are the advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim? 使用zmqRemoteAPI與其他Python與CoppeliaSim之間的通訊方式相比，有以下優點和缺點： 優點： 快速：zmqRemoteAPI使用ZeroMQ庫，通訊速度較快，能夠實現快速的數據傳輸。 靈活性：使用zmqRemoteAPI可以實現很多不同的通訊方式，例如請求/回應、訂閱/發布等等，可以根據不同的應用場景選擇不同的通訊模式。 可擴展性：zmqRemoteAPI具有良好的可擴展性，能夠支持多種用戶同時連接到CoppeliaSim，並且能夠支持多種操作系統。 跨平台：zmqRemoteAPI適用於各種操作系統和平台，使得不同的環境下使用者都可以輕鬆地進行通訊。 缺點： 學習曲線：使用zmqRemoteAPI需要學習一些新的概念和API，對於初學者來說可能需要花費一些時間來學習。 程式代碼複雜：使用zmqRemoteAPI時需要在Python代碼中編寫很多低層次的通訊代碼，這可能會使代碼變得複雜。 總的來說，zmqRemoteAPI是一種可靠且快速的通訊方式，並且具有良好的可擴展性和跨平台性，但使用它需要一定的學習和編程知識。 \n 5.Can you give an example of a project or task that you could complete using zmqRemoteAPI in CoppeliaSim? 以下是使用zmqRemoteAPI在CoppeliaSim中完成的一些項目示例： 機器人運動控制：使用zmqRemoteAPI可以通過Python腳本控制CoppeliaSim中的機器人運動，從而實現各種自動化任務，例如導航、定位、抓取等。 场景仿真：使用zmqRemoteAPI可以在CoppeliaSim中進行場景仿真，並通過Python腳本控制仿真參數、物體位置、燈光等，從而實現各種場景測試和仿真。 機器人視覺感知：使用zmqRemoteAPI可以通過Python腳本控制CoppeliaSim中的機器人視覺感知模塊，從而實現物體檢測、識別、追蹤等任務。 自主車輛控制：使用zmqRemoteAPI可以通過Python腳本控制CoppeliaSim中的自主車輛運動，從而實現路徑規劃、障礙物避免、速度控制等任務。 總之，使用zmqRemoteAPI可以實現各種不同的任務和項目，並且具有良好的可擴展性和靈活性。 \n', 'tags': '', 'url': '有關CoppeliaSim zmpRemoteAPI.html'}, {'title': 'W11', 'text': ' Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n <<<<<<< HEAD \n 足球場地 \n', 'tags': '', 'url': 'W11.html'}, {'title': 'Brython', 'text': '>>>>>>> b698f7e04779b3857cff11492eac2c99c2e70e76 \n >>>>>>> 9146e8bb99311200868add15d25440f97a12c3eb \n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n \n \n \n \n \n \n STL part viewer \n \n \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n<div id="plot"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n\n# Plot the result using Plotly.js\ndata = [\n    {\n        \'x\': [best_solution[0]],\n        \'y\': [best_solution[1]],\n        \'mode\': \'markers\',\n        \'marker\': {\'size\': 12},\n        \'name\': \'Best Solution\'\n    }\n]\n\nlayout = {\n    \'xaxis\': {\'range\': [-10, 10]},\n    \'yaxis\': {\'range\': [-10, 10]},\n}\n\nPlotly.newPlot(\'plot\', data, layout)\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n \n function(population[i]) # Update the best solution if population_fitness[i] < best_fitness: best_solution = population[i] best_fitness = population_fitness[i] # Print the current iteration and best fitness print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\') return best_solution # Run the sine cosine algorithm to solve the optimization problem with constraints best_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100) # Print the result output_div = document[\'output\'] output_div.text = f\'Best Solution: {best_solution}\' # Plot the result using Plotly.js data = [ { \'x\': [best_solution[0]], \'y\': [best_solution[1]], \'mode\': \'markers\', \'marker\': {\'size\': 12}, \'name\': \'Best Solution\' } ] layout = { \'xaxis\': {\'range\': [-10, 10]}, \'yaxis\': {\'range\': [-10, 10]}, } Plotly.newPlot(\'plot\', data, layout) </script> <script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script> </body> </html> \n', 'tags': '', 'url': 'Brython_ex2.html'}]};
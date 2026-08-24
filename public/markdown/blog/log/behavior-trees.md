Improvements upon FSM

https://arxiv.org/pdf/1709.00084

* **Behavior Trees (BTs):** A tree-based control architecture that periodically routes ticks to manage task execution, preemption, and reactivity across autonomous agents.


* **Finite State Machines (FSMs / HFSMs):** Traditional graph-based control structures contrasted with BTs due to their complex one-way state transitions and scalability challenges.


* **Modularity & Reactivity:** The twin core advantages of BTs, balancing closed-loop responsiveness to dynamic environments with reusable, decoupled subtrees.


* **Control Flow & Execution Nodes:** Core structural components comprising Sequence, Fallback, Parallel, and Decorator nodes, alongside Action and Condition leaves.


* **Return Statuses:** The standardized interface signals (`Success`, `Failure`, `Running`) returned up the hierarchy to govern execution flow.


* **State-Space Formulation:** The formal mathematical model representing BT execution via difference equations, partition sets, and stability regions.


* **Automated Planning (PA-BT / ABL):** Methods for synthesizing and dynamically refining BT structures at runtime using planning algorithms like Hybrid Backward-Forward search.


* **Genetic Programming (GP-BT):** Machine learning techniques using cross-over and mutation operators to evolve and optimize BT topologies automatically.


* **Reinforcement Learning (RL):** Combining policy learning and action selection mechanisms with hierarchical Behavior Tree execution.


* **Stochastic Behavior Trees (SBTs):** Probabilistic modeling using Markov Chains (DTMCs) to analyze success rates, failure probabilities, and execution duration.
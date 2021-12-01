# KANBAN-BOARD

This project is a learining exercise. The end goal is to have a simple working application that utilizes:
* React
* Redux - for state management
* i18next - for translations

# Capabilities in Pipeline
The application should be a simple yet functional kanban board.
* Create tasks
* Edit tasks
* Move tasks between the statuses
* Available statuses:
    * Todo - new tasks
    * Blocked - if by any reason progress on the task is halted
    * In progress - tasks that are worked on
    * Done - tasks that are completed 

The data is preserved in the local storage. Using the redux toolkit allows easy change of the storage to be a local or remote database, project file system or other solution.
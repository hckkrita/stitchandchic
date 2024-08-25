import React, { Component } from 'react';
import './timer.css';

class TimerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            intervalId: null,
        };
    }

    startTimer = () => {
        if (this.state.intervalId) return; // Prevent multiple intervals

        const intervalId = setInterval(() => {
            this.setState((prevState) => ({
                timer: prevState.timer + 1,
            }));
        }, 1000);

        this.setState({ intervalId });
    };

    stopTimer = () => {
        clearInterval(this.state.intervalId);
        this.setState({ intervalId: null });
    };

    formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    render() {
        const { timer } = this.state;
        const formattedTime = this.formatTime(timer);

        return (
            <div className="flex flex-col items-center justify-center ">
                <div className=" p-6">
                    <h1 className="text-3xl font-bold mb-4">Timer: {formattedTime}</h1>
                    <div className="flex space-x-4">
                        <button
                            className=" bg-[#FFE7E3] hover:bg-[#FFE7E3] font-bold py-2 px-4 rounded-md m-2 transition duration-300 ease-in-out"
                            onClick={this.startTimer}
                        >
                            Start
                        </button>
                        <button
                            className="bg-[#FFE7E3] hover:bg-[#FFE7E3] font-bold py-2 px-4 rounded-md m-2 transition duration-300 ease-in-out"
                            onClick={this.stopTimer}
                        >
                            Stop
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimerComponent;

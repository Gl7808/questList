type goalType = {
    targetName: string,
    quantity: number
}
type questsType = {
    name: string,
    questType: string,
    difficult: string,
    type: string,
    locationId: number,
    location: string,
    npcName: string,
    goal: goalType[],
    exp: number,
    gold: number,
    spirit: number,
    point: number[],
    levelRequest: number,
    party: boolean,
    isDone: boolean
}
type PropsType = { quests: questsType[] }

export const Quest = ({quests}: PropsType) => {
    return (
        <div>
            <p>
                {
                    quests.map((quest) => {
                        return (
                            <div>
                                <table>
                                    <thead>Задание : {quest.name}</thead>
                                    <tbody>
                                    <tr>
                                        <th>Необходимый уровень : {quest.levelRequest}</th>
                                        <th>Координаты : {quest.point[0]} , {quest.point[1]}</th>
                                        {
                                            quest.goal.map((any) => {
                                                for (let i = 0; i < quest.goal.length; i++) {
                                                    return (
                                                        <p>
                                                            Кол-во {quest.goal[i].quantity},
                                                            Моб {quest.goal[i].targetName}
                                                        </p>
                                                    );
                                                }
                                            })
                                        }
                                    </tr>
                                    <tr>
                                        <th>Юаней : {quest.gold}</th>
                                        <th>Опыта : {quest.exp}</th>
                                        <th>Духа : {quest.spirit}</th>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        );
                    })
                }
            </p>
        </div>
    );
}
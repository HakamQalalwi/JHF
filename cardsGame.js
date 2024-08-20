
// Cards Game Submissions - Tuesday

// Explanation:

// You are given a collection of playing cards represented as a list of pairs. Each pair contains a card rank (e.g., "2", "10", "J", "Q", "K", "A") and a suit (e.g., "h" for hearts, "d" for diamonds, "c" for clubs, "s" for spades).

// A full set of cards consists of 52 cards, with exactly 13 unique ranks (Ace, 2, 3, ..., King) for each of the 4 suits (Hearts, Diamonds, Clubs, Spades).

// Your task is to determine how many full sets of 52 cards can be formed from the given collection. Each full set must contain exactly 13 different cards from each suit.

// Input:
// A list of tuples where each tuple is in the format (rank, suit), representing the rank and suit of a card in the collection.
// Output:
// An integer representing the maximum number of full sets of 52 unique cards that can be formed from the collection.
// Example:
// python
// Copy code
// cards = [("A", "h"), ("2", "h"), ("3", "h"), ("4", "h"), ("5", "h"), ("6", "h"),
// ("7", "h"), ("8", "h"), ("9", "h"), ("10", "h"), ("J", "h"), ("Q", "h"), ("K", "h"),
// ("A", "d"), ("2", "d"), ("3", "d"), ("4", "d"), ("5", "d"), ("6", "d"),
// ("7", "d"), ("8", "d"), ("9", "d"), ("10", "d"), ("J", "d"), ("Q", "d"), ("K", "d"),
// ("A", "c"), ("2", "c"), ("3", "c"), ("4", "c"), ("5", "c"), ("6", "c"),
// ("7", "c"), ("8", "c"), ("9", "c"), ("10", "c"), ("J", "c"), ("Q", "c"), ("K", "c"),
// ("A", "s"), ("2", "s"), ("3", "s"), ("4", "s"), ("5", "s"), ("6", "s"),
// ("7", "s"), ("8", "s"), ("9", "s"), ("10", "s"), ("J", "s"), ("Q", "s"), ("K", "s")]
// Output:

// 1
// (Because the list contains exactly one full set of 52 unique cards.)

// Constraints:
// - The input list may contain more or fewer cards than needed for a full set.
// - The card ranks will be valid and within the standard playing card ranks (Ace through King).
// - The suits will be valid and limited to Hearts, Diamonds, Clubs, and Spades.


function countSet(inp) {
    let counts = new Map([
        ['S', new Array(13).fill(0)],
        ['D', new Array(13).fill(0)],
        ['H', new Array(13).fill(0)],
        ['F', new Array(13).fill(0)]
    ]);

    inp.forEach(([num, type]) => counts.get(type)[num]++);

    let fullSet = {
        'S': Math.min(...counts.get('S')),'D': Math.min(...counts.get('D')),'H': Math.min(...counts.get('H')),'F': Math.min(...counts.get('F'))
    };
    
    return Math.min(fullSet['S'], fullSet['D'], fullSet['H'], fullSet['F']);
}



let inp =[[11, 'H'], [3, 'F'], [7, 'D'], [9, 'H'], [11, 'D'], [7, 'D'], [5, 'H'], 
[8, 'H'], [7, 'D'], [11, 'F'], [11, 'S'], [0, 'H'], [0, 'H'], [11, 'S'], 
[3, 'F'], [6, 'H'], [1, 'D'], [0, 'F'], [5, 'S'], [4, 'F'], [8, 'S'], 
[4, 'D'], [7, 'S'], [6, 'D'], [8, 'F'], [8, 'S'], [4, 'F'], [8, 'S'], 
[10, 'H'], [3, 'F'], [4, 'D'], [1, 'F'], [5, 'F'], [12, 'F'], [4, 'D'], 
[3, 'H'], [5, 'F'], [11, 'H'], [9, 'F'], [8, 'F'], [4, 'F'], [4, 'F'], 
[6, 'S'], [9, 'H'], [0, 'S'], [11, 'D'], [7, 'D'], [12, 'H'], [9, 'D'], 
[12, 'S'], [11, 'D'], [2, 'D'], [2, 'F'], [6, 'D'], [5, 'F'], [5, 'F'], 
[12, 'F'], [8, 'D'], [1, 'D'], [7, 'H'], [2, 'H'], [6, 'D'], [11, 'F'], 
[3, 'F'], [5, 'D'], [8, 'H'], [8, 'F'], [9, 'S'], [12, 'S'], [0, 'H'], 
[6, 'S'], [12, 'D'], [7, 'H'], [4, 'H'], [1, 'D'], [10, 'H'], [6, 'S'], 
[4, 'S'], [6, 'D'], [3, 'S'], [0, 'H'], [12, 'F'], [12, 'H'], [5, 'S'], 
[2, 'S'], [0, 'H'], [2, 'H'], [2, 'F'], [9, 'H'], [8, 'D'], [7, 'F'], 
[12, 'F'], [6, 'S'], [4, 'D'], [8, 'F'], [6, 'H'], [1, 'S'], [12, 'H'], 
[1, 'S'], [0, 'H'], [9, 'D'], [7, 'F'], [1, 'D'], [1, 'F'], [12, 'H'], 
[7, 'S'], [2, 'H'], [5, 'F'], [11, 'D'], [3, 'F'], [1, 'F'], [7, 'S'], 
[7, 'S'], [10, 'F'], [7, 'S'], [4, 'H'], [1, 'F'], [7, 'S'], [8, 'D'], 
[0, 'F'], [6, 'H'], [10, 'S'], [6, 'D'], [8, 'F'], [2, 'D'], [3, 'S'], 
[0, 'F'], [4, 'H'], [9, 'H'], [3, 'F'], [9, 'D'], [7, 'F'], [7, 'S'], 
[10, 'S'], [0, 'D'], [6, 'S'], [9, 'D'], [8, 'S'], [12, 'S'], [0, 'S'], 
[3, 'H'], [12, 'D'], [3, 'F'], [5, 'F'], [8, 'H'], [5, 'D'], [8, 'H'], 
[3, 'S'], [9, 'D'], [11, 'H'], [4, 'H'], [3, 'H'], [0, 'F'], [4, 'S'], 
[5, 'S'], [8, 'D'], [1, 'H'], [2, 'F'], [8, 'H'], [12, 'F'], [2, 'F'], 
[1, 'H'], [4, 'D'], [5, 'H'], [10, 'H'], [4, 'H'], [11, 'D'], [8, 'H'], 
[7, 'F'], [0, 'F'], [3, 'D'], [0, 'F'], [2, 'H'], [5, 'D'], [1, 'D'], 
[6, 'S'], [11, 'D'], [3, 'F'], [4, 'H'], [12, 'F'], [10, 'H'], [6, 'D'], 
[5, 'F'], [0, 'S'], [2, 'S'], [11, 'F'], [3, 'D'], [7, 'H'], [10, 'H'], 
[1, 'S'], [10, 'S'], [12, 'F'], [9, 'D'], [7, 'S'], [5, 'S'], [8, 'S'], 
[9, 'S'], [9, 'D'], [6, 'F'], [1, 'F'], [0, 'S'], [2, 'D'], [5, 'H'], [2, 'D'], [12, 'S'], [7, 'H'], [5, 'F'], [3, 'S'], [5, 'H'],
[0, 'S'], [1, 'S'], [2, 'S'], [3, 'S'], [4, 'S'], [5, 'S'], [6, 'S'], [7, 'S'], [8, 'S'],
[9, 'S'], [10, 'S'], [11, 'S'], [12, 'S'], [0, 'D'], [1, 'D'], [2, 'D'], [3, 'D'], [4, 'D'],
[5, 'D'], [6, 'D'], [7, 'D'], [8, 'D'], [9, 'D'], [10, 'D'], [11, 'D'], [12, 'D'],
[0, 'H'], [1, 'H'], [2, 'H'], [3, 'H'], [4, 'H'], [5, 'H'], [6, 'H'], [7, 'H'], [8, 'H'],
[9, 'H'], [10, 'H'], [11, 'H'], [12, 'H'], [0, 'F'], [1, 'F'], [2, 'F'], [3, 'F'], [4, 'F'],
[5, 'F'], [6, 'F'], [7, 'F'], [8, 'F'], [9, 'F'], [10, 'F'], [11, 'F'], [12, 'F']];


console.log(countSet(inp));

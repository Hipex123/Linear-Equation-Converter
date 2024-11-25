#include "../Includes/evaluator.hpp"

float Evaluator::eval(const std::string &expression)
{
    try
    {
        std::string cleanedExpression = removeSpaces(expression);
        std::istringstream stream(cleanedExpression);
        return parseExpression(stream);
    }
    catch (const std::exception &)
    {
        return 0;
    }
}

void Evaluator::sortedEval(float evalP, std::array<int, 5> &buffer)
{
    uint8_t dotIndexMinus{};
    std::string tempEvalString = std::to_string(evalP);
    std::string tempString(tempEvalString.begin(), tempEvalString.end());

    for (int i = 0; i < 5; i++)
    {
        if (tempString[i] == '.')
        {
            dotIndexMinus = 4 - i;
            break;
        }
    }

    evalP = std::round(evalP * std::pow(10, dotIndexMinus)) / std::pow(10, dotIndexMinus);

    std::string evalString = std::to_string(evalP);
    std::string roundedEvalString(evalString.begin(), evalString.end());

    for (int i = 0; i < 5; i++)
    {
        if (roundedEvalString[i] == '.')
        {
            buffer[i] = -1;
            continue;
        }
        if (roundedEvalString[i] == '-')
        {
            buffer[i] = -2;
            continue;
        }
        buffer[i] = roundedEvalString[i] - '0'; // convert char to int
    }
}

float Evaluator::parseExpression(std::istringstream &stream)
{
    float result = parseTerm(stream);
    while (true)
    {
        char op = stream.peek();
        if (op == '+' || op == '-')
        {
            stream.get();
            float nextTerm = parseTerm(stream);
            result = (op == '+') ? result + nextTerm : result - nextTerm;
        }
        else
        {
            break;
        }
    }
    return result;
}

float Evaluator::parseTerm(std::istringstream &stream)
{
    float result = parseFactor(stream);
    while (true)
    {
        char op = stream.peek();
        if (op == '*' || op == '/')
        {
            stream.get();
            float nextFactor = parseFactor(stream);
            result = (op == '*') ? result * nextFactor : result / nextFactor;
        }
        else
        {
            break;
        }
    }
    return result;
}

float Evaluator::parseFactor(std::istringstream &stream)
{
    float result;
    char c = stream.peek();

    if (c == '(')
    {
        stream.get();
        result = parseExpression(stream);

        if (stream.get() != ')')
        {
            throw std::runtime_error("Mismatched parentheses");
        }
    }
    else if (std::isdigit(c) || c == '-')
    {
        stream >> result;
    }
    else
    {
        throw std::runtime_error("Invalid expression");
    }
    return result;
}

std::string Evaluator::removeSpaces(const std::string &str)
{
    std::string result;
    for (char c : str)
    {
        if (!std::isspace(c))
        {
            result += c;
        }
    }
    return result;
}

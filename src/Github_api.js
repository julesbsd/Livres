import { useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

export default function Github_api() {
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchUserAndRepos = async () => {
            const userResponse = await fetch('https://api.github.com/user', {
                headers: {
                    'Authorization': 'Bearer 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'
                }
            });
            const userData = await userResponse.json();
            setUser(userData);

            const reposResponse = await fetch('https://api.github.com/user/repos', {
                headers: {
                    'Authorization': 'Bearer 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'
                }
            });
            const reposData = await reposResponse.json();
            setRepos(reposData);
        };

        fetchUserAndRepos();
    }, []);
    console.log(repos, user);
    <Card className="w-96">
        <CardHeader floated={false} className="h-80">
            <img src="/img/team-3.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
                Natalie Paisley
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
                CEO / Co-Founder
            </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
                <Typography
                    as="a"
                    href="#facebook"
                    variant="lead"
                    color="blue"
                    textGradient
                >
                    <i className="fab fa-facebook" />
                </Typography>
            </Tooltip>
            <Tooltip content="Follow">
                <Typography
                    as="a"
                    href="#twitter"
                    variant="lead"
                    color="light-blue"
                    textGradient
                >
                    <i className="fab fa-twitter" />
                </Typography>
            </Tooltip>
            <Tooltip content="Follow">
                <Typography
                    as="a"
                    href="#instagram"
                    variant="lead"
                    color="purple"
                    textGradient
                >
                    <i className="fab fa-instagram" />
                </Typography>
            </Tooltip>
        </CardFooter>
    </Card>
}
import { render, screen } from "@testing-library/react";
import ProjectsSidebar from "./ProjectsSidebar";

test('renders a list of project titles', () => {
    const projects = [
      { id: 'p1', title: 'Test Project', description: 'desc', dueDate: '2025-04-30' },
    ];
  
    render(<ProjectsSidebar projects={projects} />);
  
    const projectTitle = screen.getByText('Test Project');
    expect(projectTitle).toBeInTheDocument();
  });
export default function JobsLayout ({
    children } :{ children: React.ReactNode }
) {
    return (
       <div>
      <nav>
        <a href="/">Home</a> | <a href="/jobs">All Jobs</a>
      </nav>
      <div>{children}</div>
    </div>
    );
}